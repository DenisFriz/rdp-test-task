<script setup lang="ts">
import { ref } from "vue";
import axiosClient from "../api/axiosClient";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Select from "primevue/select";
import Button from "primevue/button";
import Message from "primevue/message";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits(["close"]);

const close = () => emit("close");

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

const sourceOptions = [
  { label: "Facebook", value: 1 },
  { label: "Instagram", value: 2 },
];

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
      sourceId: form.value.source || 0,
    };

    await axiosClient.post("/leads", payload);

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
  }
};
</script>

<template>
  <Dialog
    :visible="visible"
    modal
    header="Create New Lead"
    :closable="false"
    :dismissableMask="true"
    class="w-160"
    @update:visible="close"
  >
    <div v-if="serverErrors.length" class="mb-4 space-y-2 mt-4">
      <Message v-for="(err, i) in serverErrors" :key="i" severity="error">
        {{ err }}
      </Message>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="grid grid-cols-2 gap-4 items-start"
    >
      <div class="space-y-4 bg-neutral100 py-3 px-6 rounded-lg">
        <span class="p-float-label">
          <label
            for="firstName"
            class="text-textPrimary! mb-2 block text-[14px]/[21px]"
            ><span class="text-danger mr-1.5">*</span> First Name</label
          >
          <InputText
            id="firstName"
            v-model="form.firstName"
            class="w-full bg-white! border-neutral400! shadow-[0px_1px_2px_0px_#1212170D]! py-2.5! text-neutral500! focus:border-primary!"
            placeholder="अभिजीत"
          />
          <div class="h-px bg-neutral400 mt-4 mb-2"></div>
        </span>

        <span class="p-float-label">
          <label
            for="lastName"
            class="text-textPrimary! mb-2 block text-[14px]/[21px]"
            ><span class="text-danger mr-1.5">*</span> Last Name</label
          >
          <InputText
            id="lastName"
            v-model="form.lastName"
            class="w-full bg-white! border-neutral400! shadow-[0px_1px_2px_0px_#1212170D]! py-2.5! text-neutral500! focus:border-primary!"
            placeholder="Doe"
          />
          <div class="h-px bg-neutral400 mt-4 mb-2"></div>
        </span>

        <span class="p-float-label">
          <label
            for="email"
            class="text-textPrimary! mb-2 block text-[14px]/[21px]"
            ><span class="text-danger mr-1.5">*</span> Email</label
          >
          <InputText
            id="email"
            type="email"
            v-model="form.email"
            class="w-full bg-white! border-neutral400! shadow-[0px_1px_2px_0px_#1212170D]! py-2.5! text-neutral500! focus:border-primary!"
            placeholder="john1z24x.doe@example.com"
          />
          <div class="h-px bg-neutral400 mt-4 mb-2"></div>
        </span>

        <span class="p-float-label">
          <label
            for="phone"
            class="text-textPrimary! mb-2 block text-[14px]/[21px]"
            ><span class="text-danger mr-1.5">*</span> Phone</label
          >
          <InputText
            id="phone"
            v-model="form.phone"
            class="w-full bg-white! border-neutral400! shadow-[0px_1px_2px_0px_#1212170D]! py-2.5! text-neutral500! focus:border-primary!"
            placeholder="12345678917"
          />
          <div class="h-px bg-neutral400 mt-4 mb-2"></div>
        </span>

        <span class="p-float-label">
          <label
            for="password"
            class="text-textPrimary! mb-2 block text-[14px]/[21px]"
            ><span class="text-danger mr-1.5">*</span> Password</label
          >
          <Password
            id="password"
            v-model="form.password"
            toggleMask
            class="w-full"
            inputClass="w-full bg-white! border-neutral400! shadow-[0px_1px_2px_0px_#1212170D]! py-2.5! text-neutral500! focus:border-primary!"
            placeholder="SecurePasswor"
          />
        </span>
      </div>
      <div class="space-y-4 bg-neutral100 py-3 px-6 rounded-lg">
        <span class="p-float-label">
          <label
            for="source"
            class="text-textPrimary! mb-2 block text-[14px]/[21px]"
            ><span class="text-danger mr-1.5">*</span> Source</label
          >
          <Select
            ref="selectRef"
            labelId="source"
            v-model="form.source"
            :options="sourceOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="Not Selected"
            class="w-full"
            inputClass="focus:border-primary!"
          />
          <div class="h-px bg-neutral400 mt-4 mb-2"></div>
        </span>

        <span class="p-float-label">
          <label
            for="countryISO"
            class="text-textPrimary! mb-2 block text-[14px]/[21px]"
            ><span class="text-danger mr-1.5">*</span> Country ISO</label
          >
          <InputText
            id="countryISO"
            v-model="form.countryISO"
            class="w-full bg-white! border-neutral400! shadow-[0px_1px_2px_0px_#1212170D]! py-2.5! text-neutral500! focus:border-primary!"
            placeholder="TV"
          />
          <div class="h-px bg-neutral400 mt-4 mb-2"></div>
        </span>

        <span class="p-float-label">
          <label
            for="campaignName"
            class="text-textPrimary! mb-2 block text-[14px]/[21px]"
            ><span class="text-danger mr-1.5">*</span> Campaign Name</label
          >
          <InputText
            id="campaignName"
            v-model="form.campaignName"
            class="w-full bg-white! border-neutral400! shadow-[0px_1px_2px_0px_#1212170D]! py-2.5! text-neutral500! focus:border-primary!"
            placeholder="TEst"
          />
        </span>
      </div>

      <div class="col-span-2 flex justify-center gap-6 mt-6">
        <Button
          label="Create"
          type="submit"
          class="min-w-34! rounded-lg! bg-primary! border! border-primary! text-white! font-medium! text-sm!"
        />
        <Button
          label="Cancel"
          severity="secondary"
          outlined
          type="button"
          class="min-w-34! rounded-lg! bg-info! border! border-primary! text-primary! font-medium! text-sm!"
          @click="close"
        />
      </div>
    </form>
  </Dialog>
</template>

<style>
.p-dialog {
  background-color: #fff !important;
  border: 1px solid #e2e8f0 !important;
}

.p-dialog-header {
  padding: 24px !important;
}

.p-dialog-content {
  padding: 0 24px 24px 24px !important;
}

.p-dialog-title {
  color: #334155 !important;
  font-weight: 700 !important;
  font-size: 18px !important;
}

.p-dialog-header {
  justify-content: center !important;
}

.p-select-overlay {
  border: 1px solid #cbd5e1 !important;
  box-shadow: 0px 1px 2px rgba(18, 18, 23, 0.05) !important;
  border-radius: 8px;
}

.p-select-overlay {
  box-shadow: 0px 4px 6px -1px #0000001a !important;
}
</style>
