<script setup lang="ts">
import { ref } from "vue";
import axiosClient from "../api/axiosClient";

const props = defineProps({
  visible: Boolean,
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  source: "",
  countryISO: "",
  campaignName: "",
});

const sourceMap: Record<string, number> = {
  Facebook: 1,
  Instagram: 2,
};

const serverErrors = ref<string[]>([]);

const handleSubmit = async () => {
  try {
    serverErrors.value = [];

    const payload = {
      token: "oflrhajucckq",
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
      phone: form.value.phone,
      countryISO: form.value.countryISO,
      campaignName: form.value.campaignName,
      sourceId: sourceMap[form.value.source] || 0,
    };

    const response = await axiosClient.post("/leads", payload);
    console.log("Успешно создано:", response.data);

    close();

    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      source: "",
      countryISO: "",
      campaignName: "",
    };
  } catch (error: any) {
    if (error.response?.data?.errors) {
      serverErrors.value = error.response.data.errors.map(
        (e: any) => e.detail || e.message,
      );
    } else {
      serverErrors.value = [error.response?.data?.error || error.message];
    }
    console.error("Ошибка:", serverErrors.value);
  }
};
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-[#000005cc] flex items-center justify-center z-50"
    @click.self="close"
  >
    <div class="bg-white rounded-lg shadow-lg min-w-160 p-6 relative">
      <h2
        class="text-xl text-neutral800 font-semibold mb-6 text-center px-2 py-1"
      >
        Create New Lead
      </h2>

      <div v-if="serverErrors.length" class="mb-4">
        <ul class="text-danger text-sm list-disc list-inside">
          <li v-for="(err, index) in serverErrors" :key="index">{{ err }}</li>
        </ul>
      </div>

      <form
        class="grid grid-cols-2 gap-6 mb-6 items-start"
        @submit.prevent="handleSubmit"
      >
        <div class="bg-gray-50 p-4 rounded-lg space-y-4">
          <div>
            <label class="block mb-1 font-medium text-gray-700" for="firstName">
              <span class="text-danger">*</span> First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="अभिजीत"
              class="w-full rounded-md border text-neutral500 border-neutral400 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.firstName"
              required
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700" for="lastName">
              <span class="text-danger">*</span> Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              class="w-full rounded-md border text-neutral500 border-neutral400 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.lastName"
              required
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700" for="email">
              <span class="text-danger">*</span> Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john1z24x.doe@example.com"
              class="w-full rounded-md border text-neutral500 border-neutral400 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.email"
              required
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700" for="phone">
              <span class="text-danger">*</span> Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="12345678917"
              class="w-full rounded-md border text-neutral500 border-neutral400 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.phone"
              required
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700" for="password">
              <span class="text-danger">*</span> Password
            </label>
            <div class="relative">
              <input
                id="password"
                type="password"
                placeholder="SecurePassword"
                class="w-full rounded-md border text-neutral500 border-neutral400 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                v-model="form.password"
                required
              />
              <button
                type="button"
                class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-700"
                aria-label="Toggle password visibility"
              >
                👁️
              </button>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg space-y-4">
          <div>
            <label class="block mb-1 font-medium text-gray-700" for="source">
              <span class="text-danger">*</span> Source
            </label>
            <select
              id="source"
              class="w-full rounded-md border text-neutral500 border-neutral400 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.source"
              required
            >
              <option disabled value="">Not Selected</option>
              <option>Facebook</option>
              <option>Instagram</option>
            </select>
          </div>
          <div>
            <label
              class="block mb-1 font-medium text-gray-700"
              for="countryISO"
            >
              <span class="text-danger">*</span> Country ISO
            </label>
            <input
              id="countryISO"
              type="text"
              placeholder="TV"
              class="w-full rounded-md border text-neutral500 border-neutral400 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.countryISO"
              required
            />
          </div>
          <div>
            <label
              class="block mb-1 font-medium text-gray-700"
              for="campaignName"
            >
              <span class="text-danger">*</span> Campaign Name
            </label>
            <input
              id="campaignName"
              type="text"
              placeholder="TEst"
              class="w-full rounded-md border text-neutral500 border-neutral400 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.campaignName"
              required
            />
          </div>
        </div>
        <div class="flex justify-center gap-4 col-span-full">
          <button
            type="submit"
            class="cursor-pointer not-first:px-6 py-2 bg-primary text-sm text-white border-primary rounded-lg min-w-34 hover:bg-blue-700 transition"
          >
            Create
          </button>
          <button
            @click="close"
            type="button"
            class="cursor-pointer px-6 py-2 bg-info text-sm text-primary border-primary border-2 rounded-lg min-w-34 hover:bg-blue-200 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
