<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ref } from "vue";
import type { Lead } from "../types/leads.types";

const props = defineProps<{
  leads: Lead[];
}>();

const rowsPerPage = ref(10);
const first = ref(0);
</script>

<template>
  <div class="bg-background! w-full">
    <DataTable
      :value="props.leads"
      paginator
      paginatorPosition="top"
      :rows="rowsPerPage"
      :first="first"
      :rowsPerPageOptions="[5, 10, 20]"
      paginatorClass="bg-white! border rounded-md"
    >
      <Column
        field="leadId"
        header="ID Lead"
        sortable
        class="text-center"
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center! border! border-neutral300!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700"
          >
            {{ data.leadId }}
          </div>
        </template></Column
      >
      <Column
        field="accountType"
        header="Account Type"
        sortable
        class="text-center"
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center! border! border-neutral300!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700"
          >
            {{ data.accountType }}
          </div>
        </template>
      </Column>
      <Column
        field="email"
        header="Email"
        sortable
        class="text-center"
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center! border! border-neutral300!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700"
          >
            {{ data.email }}
          </div>
        </template>
      </Column>
      <Column
        field="phone"
        header="Phone"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center! border! border-neutral300!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700"
          >
            {{ data.phone }}
          </div>
        </template>
      </Column>
      <Column
        field="countryName"
        header="Country Name"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center! border! border-neutral300!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700"
          >
            {{ data.countryName }}
          </div>
        </template>
      </Column>
      <Column
        field="leadRegistration"
        header="Lead Registration"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center! border! border-neutral300!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700"
          >
            {{ data.leadRegistration }}
          </div>
        </template>
      </Column>
      <Column
        field="campaignName"
        header="Campaign Name"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center! border! border-neutral300!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700"
          >
            {{ data.campaignName }}
          </div>
        </template>
      </Column>
      <Column
        field="leadStatus"
        header="Lead Status"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center! border! border-neutral300!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700"
          >
            {{ data.leadStatus }}
          </div>
        </template>
      </Column>
      <Column
        field="registrationTime"
        header="Registration Time"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center! border! border-neutral300!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700"
          >
            {{ data.registrationTime }}
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoper>
.p-paginator {
  background-color: #ffffff !important;
  border: none;
  padding: 0.25rem;
}

.p-datatable-tbody > tr {
  background-color: #ffffff !important;
}

.p-select {
  background-color: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
}
.p-select-label {
  color: #94a3b8 !important;
}

.p-paginator-page.p-paginator-page-selected {
  color: #475569 !important;
  background-color: none !important;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev {
  color: #475569 !important;
}

.p-paginator-page.p-paginator-page-selected {
  background-color: #5a67621f !important;
}

.p-select-list {
  background-color: #fff;
  border: 1px solid #cbd5e1 !important;
  border-radius: 8px !important;
}

.p-select-option {
  color: #94a3b8 !important;
}

.p-select-list-container {
  background-color: #fff !important;
}

.p-datatable-tbody > tr > td {
  border-width: 1px !important;
  border-color: #e2e8f0 !important;
}
</style>
