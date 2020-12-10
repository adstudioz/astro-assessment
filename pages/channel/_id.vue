<template>
  <div>
    <Header />
    <div class="container">
      <div v-if="!isLoading">
        <div v-if="channel">
          <div class="flex mb-20">
            <img
              class="w-100 mr-20"
              :src="channel.imageUrl"
              :alt="`${channel.title} logo`"
            />
            <div>
              <p class="text-20 font-light">{{ channel.title }}</p>
              <p class="text-20 font-medium">CH{{ channel.stbNumber }}</p>
            </div>
          </div>
          <div class="mb-50 w-full max-w-500">
            <p>{{ channel.description }}</p>
          </div>
          <div></div>
          <div class="flex mb-20">
            <div
              @click="updateCurrentDay(day.index)"
              class="mr-20 cursor-pointer"
              v-for="(day, index) in days"
              :key="index"
            >
              <p
                class="text-14 text-red-100 md:text-20 font-bold"
                v-if="day.index === currentDay && day.value === today"
              >
                TODAY
              </p>
              <p
                class="text-14 text-red-100 md:text-20 font-bold"
                v-else-if="day.index === currentDay"
              >
                {{ day.value }}
              </p>
              <p
                class="text-14 md:text-20 font-light hover:text-red-100"
                v-else
              >
                {{ day.value }}
              </p>
            </div>
          </div>
          <div>
            <div
              class="flex mb-14"
              v-for="(schedule, index) in currentSchedule"
              :key="index"
            >
              <p class="mr-30 text-gray-200 text-14">
                {{ getTime(schedule.datetime) }}
              </p>
              <p class="text-14">{{ schedule.title }}</p>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center mt-100 flex-col" v-else>
          <img
            class="w-300"
            src="@/assets/image/img_not_found.svg"
            alt="not found"
          />
          <p class="mt-30 text-14">No channel found</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { keys } from 'lodash';
import { Component, Vue, Provide } from 'vue-property-decorator';

export interface Data {
  responseCode: number;
  responseMessage: string;
  response: Channel;
}

export interface Channel {
  id: number;
  title: string;
  description: string;
  isHd: boolean;
  stbNumber: string;
  language: string;
  category: string;
  originalImage: string;
  backupImage: string;
  imageUrl: string;
  isAstroGoExclusive: boolean;
  filters: string[];
  schedule: { [key: string]: Schedule[] };
}

export interface Schedule {
  eventId: string;
  title: string;
  programmeId: null;
  episodeId: null;
  datetime: Date;
  datetimeInUtc: Date;
  duration: string;
  siTrafficKey: string;
  detailUrl: string;
}

export interface Day {
  value: string;
  index: number;
}

@Component({})
export default class ChannelPage extends Vue {
  @Provide() channelId = this.$route.params.id;
  @Provide() isLoading: boolean = true;
  @Provide() channel: Channel | null = null;
  @Provide() schedules: Schedule[][] = [];
  @Provide() days: Day[] = [];
  @Provide() currentDay: number = 0;

  async created() {
    await this.fetchChannel();
  }

  get today() {
    return this.$dayjs().format('ddd').toUpperCase();
  }

  async fetchChannel() {
    this.isLoading = true;

    let data: Data | null = null;

    try {
      data = (await this.$axios.get(`/channel/${this.channelId}.json`)).data;
    } catch (error) {}

    if (data && data.response) {
      this.channel = data.response;
    }

    this.getSchedule();

    this.isLoading = false;
  }

  get currentSchedule() {
    return this.schedules[this.currentDay];
  }

  getSchedule() {
    const schedules = this.channel?.schedule;

    if (schedules) {
      this.days = Object.keys(schedules).map((schedule, index) => {
        return {
          value: this.$dayjs(schedule).format('ddd').toUpperCase(),
          index,
        };
      });
      this.schedules = Object.values(schedules);
    }
  }

  updateCurrentDay(index: number) {
    this.currentDay = index;
  }

  getTime(time: Date) {
    return this.$dayjs(time).format('hh:mm a');
  }
}
</script>
