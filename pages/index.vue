<template>
  <div class="container">
    <div>
      <Header />
      <div>
        <form @submit.prevent="searchChannels()">
          <input
            id="search_channel"
            placeholder="search"
            name="search_channel"
            v-model="searchInput"
          />
          <button>search</button>
        </form>
        <div>
          <button @click="sortChannels('channel-title')">Sort By Name</button>
          <button @click="sortChannels('channel-number')">
            Sort By Number
          </button>
          <div>
            <button
              @click="filterChannelsByCategory(category)"
              v-for="(category, index) in categories"
              :key="index"
              class="m-10"
            >
              {{ category }}
            </button>
          </div>
          <div>
            <button
              @click="filterChannelsByLanguage(language)"
              v-for="(language, index) in languages"
              :key="index"
              class="m-10"
            >
              {{ language }}
            </button>
          </div>
          <div>
            <button
              @click="filterChannelsByResolution(resolution)"
              v-for="(resolution, index) in resolutions"
              :key="index"
              class="m-10"
            >
              {{ resolution }}
            </button>
          </div>
        </div>
      </div>
      <div v-if="!isLoading">
        <div v-if="channels.length" class="flex flex-wrap">
          <div
            class="w-200 m-20"
            v-for="(channel, index) in channels"
            :key="index"
          >
            <p>title: {{ channel.title }}</p>
            <p>number: {{ channel.stbNumber }}</p>
            <p>category: {{ channel.category }}</p>
            <p>language: {{ channel.language }}</p>
            <p>resolution: {{ `${channel.isHd ? "HD" : "SD"}` }}</p>
            <img class="w-100" :src="channel.imageUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";

export enum SortBy {
  ChannnelNumber = "channel-number",
  ChannnelTitle = "channel-title",
}

export enum Resolution {
  SD = "SD",
  HD = "HD",
}

export interface Data {
  responseCode: number;
  responseMessage: string;
  response: Channel[];
}

export interface Channel {
  id: number;
  title: string;
  description: null | string;
  isHd: boolean;
  stbNumber: string;
  language: Language;
  category: Category;
  originalImage: null | string;
  backupImage: null | string;
  imageUrl: string;
  isAstroGoExclusive: boolean;
  filters: Category[];
  detailUrl: string;
  currentSchedule: CurrentSchedule[];
}

export enum Category {
  AstroOnTheGo = "Astro On The Go",
  Kids = "Kids",
  Learning = "Learning",
  Lifestyle = "Lifestyle",
  Movies = "Movies",
  Music = "Music",
  News = "News",
  Njoi = "NJOI",
  Radio = "Radio",
  SetTopBox = "Set Top Box",
  SpecialInterest = "Special Interest",
  Sports = "Sports",
  TribeID = "Tribe ID",
  TribePH = "Tribe PH",
  VarietyEntertainment = "Variety Entertainment",
}

export interface CurrentSchedule {
  eventId: string;
  title: string;
  programmeId: null | string;
  episodeId: null | string;
  datetime: Date;
  datetimeInUtc: Date;
  duration: string;
  siTrafficKey: string;
  detailUrl: string;
}

export enum Language {
  Chinese = "Chinese",
  Indian = "Indian",
  International = "International",
  KoreanJapanese = "Korean & Japanese",
  Malay = "Malay",
  MultipleLanguage = "Multiple Language",
}
// interface Filter {
//   key: string;
//   value: string;
// }

@Component({})
export default class Index extends Vue {
  @Provide() channels: Channel[] = [];
  @Provide() rawChannels: Channel[] = [];
  @Provide() filteredChannels: Channel[] = [];

  @Provide() searchInput: string = "";
  @Provide() currentSorting: SortBy | null = null;
  @Provide() isLoading: boolean = true;

  @Provide() categories: string[] = Object.values(Category);
  @Provide() languages: string[] = Object.values(Language);
  @Provide() resolutions: string[] = Object.values(Resolution);

  async created() {
    await this.fetchChannels();
  }

  async fetchChannels() {
    this.isLoading = true;
    const data: Data = (await this.$axios.get("/channel/all.json")).data;

    this.rawChannels = data.response;
    this.channels = data.response;
    this.filteredChannels = data.response;

    console.log(data.response[0]);
    this.isLoading = false;
  }

  async searchChannels(isFromRaw: boolean = false) {
    this.isLoading = true;

    if (!this.searchInput) {
      if (isFromRaw) {
        this.channels = [...this.rawChannels];
      } else {
        this.channels = [...this.filteredChannels];
      }
      this.isLoading = false;
      return;
    }

    this.channels = [];

    let lookUpChannels: Channel[] = [];

    if (isFromRaw) {
      lookUpChannels = [...this.rawChannels];
    } else {
      lookUpChannels = [...this.filteredChannels];
    }

    for (const channel of lookUpChannels) {
      if (
        channel.title.toLowerCase().includes(this.searchInput.toLowerCase()) ||
        channel.stbNumber.toLowerCase().includes(this.searchInput.toLowerCase())
      ) {
        this.channels.push(channel);
      }
    }
    this.isLoading = false;
  }

  sortChannels(sortBy: SortBy) {
    this.isLoading = true;

    this.channels = this.channels.sort((channelA, channelB) => {
      if (sortBy === SortBy.ChannnelTitle) {
        return channelA.title.toLowerCase() > channelB.title.toLowerCase()
          ? 1
          : -1;
      } else {
        return channelA.stbNumber.toLowerCase() >
          channelB.stbNumber.toLowerCase()
          ? 1
          : -1;
      }
    });

    this.currentSorting = sortBy;
    this.isLoading = false;
  }

  filterChannelsByCategory(category: Category) {
    this.isLoading = true;
    this.filteredChannels = [...this.rawChannels];
    this.filteredChannels = this.filteredChannels.filter((channel) => {
      return channel.category === category;
    });

    this.channels = [...this.filteredChannels];

    this.reapplySearchAndSort();

    this.isLoading = false;
  }

  filterChannelsByLanguage(language: Language) {
    this.isLoading = true;
    this.filteredChannels = [...this.rawChannels];
    this.filteredChannels = this.filteredChannels.filter((channel) => {
      return channel.language === language;
    });

    this.channels = [...this.filteredChannels];

    this.reapplySearchAndSort();

    this.isLoading = false;
  }

  filterChannelsByResolution(resolution: Resolution) {
    this.isLoading = true;
    this.filteredChannels = [...this.rawChannels];
    this.filteredChannels = this.filteredChannels.filter((channel) => {
      if (resolution === Resolution.HD) {
        return channel.isHd;
      } else {
        return !channel.isHd;
      }
    });

    this.channels = [...this.filteredChannels];

    this.reapplySearchAndSort();

    this.isLoading = false;
  }

  reapplySearchAndSort() {
    if (this.searchInput) {
      this.searchChannels();
    }
    if (this.currentSorting) {
      this.sortChannels(this.currentSorting);
    }
  }
}
</script>
