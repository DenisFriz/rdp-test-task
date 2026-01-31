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
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700 text-sm"
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
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700 text-sm"
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
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700 text-sm"
          >
            {{ data.email }}
          </div>
        </template>
      </Column>
      <Column
        field="phone"
        header="Phone"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700 text-sm"
          >
            {{ data.phone }}
          </div>
        </template>
      </Column>
      <Column
        field="countryName"
        header="Country Name"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700 text-sm"
          >
            {{ data.countryName }}
          </div>
        </template>
      </Column>
      <Column
        field="leadRegistration"
        header="Lead Registration"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700 text-sm"
          >
            {{ data.leadRegistration }}
          </div>
        </template>
      </Column>
      <Column
        field="campaignName"
        header="Campaign Name"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700 text-sm"
          >
            {{ data.campaignName }}
          </div>
        </template>
      </Column>
      <Column
        field="leadStatus"
        header="Lead Status"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700 text-sm"
          >
            {{ data.leadStatus }}
          </div>
        </template>
      </Column>
      <Column
        field="registrationTime"
        header="Registration Time"
        sortable
        headerClass="bg-neutral200! text-neutral800! text-sm! text-center!"
        bodyClass="bg-surface"
      >
        <template #body="{ data }">
          <div
            class="flex items-center justify-center w-full h-full text-neutral700 text-sm"
          >
            {{ data.registrationTime }}
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style>
.p-paginator {
  background-color: #ffffff !important;
  border-radius: 8px 8px 0 0;
  padding-block: 8px;
}

.p-datatable-column-title {
  font-weight: 600 !important;
}

.p-datatable-column-header-content {
  justify-content: center;
}

.p-datatable-sort-icon {
  width: 12px !important;
  height: 12px !important;
}

.p-datatable-paginator-top {
  border: none !important;
}

.p-datatable-tbody > tr {
  background-color: #ffffff !important;
}

.p-datatable-thead > tr > th {
  border-top: 1px solid #e2e8f0 !important;
  border-left: none !important;
  border-right: 1px solid #e2e8f0 !important;
  border-bottom: 1px solid #e2e8f0 !important;
}

.p-select {
  background-color: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
}
.p-select-label {
  color: #94a3b8 !important;
  padding: 12px;
}

.p-paginator-page {
  font-size: 14px !important;
}

.p-icon {
  width: 14px !important;
  height: 14px !important;
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
  border-right: 1px solid #e2e8f0 !important;
  border-bottom: 1px solid #e2e8f0 !important;
}

tbody tr:last-child td:first-child {
  border-bottom-left-radius: 8px;
}

tbody tr:last-child td:last-child {
  border-bottom-right-radius: 8px;
}
</style>
