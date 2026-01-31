<script setup lang="ts">
import Button from "primevue/button";
import Table from "./components/Table.vue";
import { ref, onMounted } from "vue";
import CreateModal from "./components/CreateModal.vue";
import axiosClient from "./api/axiosClient";
import type { Lead, LeadsResponse } from "./types/leads.types";
import bg from "./assets/bg-img.png";

const showModal = ref(false);

const leads = ref<Lead[]>([]);

const fetchLeads = async () => {
  try {
    const response = await axiosClient.get<LeadsResponse>("/leads");
    leads.value = response.data.content;
  } catch (error) {
    console.error("Ошибка при получении лидов:", error);
  }
};

onMounted(() => {
  fetchLeads();
});

const openModal = () => {
  showModal.value = true;
};

const closeModal = async () => {
  showModal.value = false;
  await fetchLeads();
};
</script>

<template>
  <main
    class="min-h-screen bg-surface"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <section class="py-30">
      <div class="w-full px-4">
        <div class="flex flex-col justify-between items-start">
          <Button
            label="New Lead"
            icon="pi pi-plus"
            class="bg-surface! py-1.5! px-6! border! border-neutral600! rounded-lg! text-neutral600! mb-4! gap-6! min-w-41.75 font-medium h-8"
            @click="openModal"
          />
          <Table :leads="leads" />
        </div>
      </div>
    </section>
    <CreateModal :visible="showModal" @close="closeModal" />
  </main>
</template>
