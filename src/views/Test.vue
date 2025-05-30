<template>
  <div class="card">
    <DataTable
      v-model:expandedRows="expandedRows"
      :value="meetingStore.selectedMeeting.topics"
      dataKey="id"
      @rowExpand="onRowExpand"
      @rowCollapse="onRowCollapse"
      tableStyle="min-width: 60rem"
    >
      <template #header>
        <div class="flex flex-wrap justify-end gap-2">
          <Button
            text
            icon="pi pi-plus"
            label="Expand All"
            @click="expandAll"
          />
          <Button
            text
            icon="pi pi-minus"
            label="Collapse All"
            @click="collapseAll"
          />
        </div>
      </template>
      <Column expander style="width: 5rem" />
      <Column field="title" header="title"></Column>

      <template #expansion="slotProps">
        <div class="p-4">
          <h5>Orders for {{ slotProps.data.title }}</h5>
          <DataTable :value="slotProps.data.topic_agreements">
            <Column field="id" header="Id" sortable></Column>
          </DataTable>
        </div>
      </template>
    </DataTable>
    <Toast />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { useMeetingStore } from "../stores/meetingStore";
//import { ProductService } from "@/service/ProductService";

/*import {
  MeetingRequest,
  GroupResponse,
  MeetingTopicsRequest,
  MeetingTopicAgreementRequest,
} from "../types";*/

const meetingStore = useMeetingStore();
const products = ref();
const expandedRows = ref({});
const toast = useToast();

onMounted(async () => {
  await meetingStore.fectchMeetingById("36f3c386-3152-43d1-9399-76c5f5d0b1da");
  products.value = [
    {
      id: "1000",
      name: "Bamboo Watch",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      rating: 5,
      inventoryStatus: "INSTOCK",
      orders: [
        {
          id: "a001",
          customer: "Amy Elsner",
          date: "2023-05-10",
          amount: 65,
          status: "DELIVERED",
        },
        {
          id: "a002",
          customer: "John Doe",
          date: "2023-05-15",
          amount: 65,
          status: "PENDING",
        },
      ],
    },
    {
      id: "1001",
      name: "Black Watch",
      image: "black-watch.jpg",
      price: 72,
      category: "Accessories",
      rating: 4,
      inventoryStatus: "LOWSTOCK",
      orders: [
        {
          id: "b001",
          customer: "Jane Doe",
          date: "2023-06-01",
          amount: 72,
          status: "CANCELLED",
        },
      ],
    },
    {
      id: "1002",
      name: "Blue Band",
      image: "blue-band.jpg",
      price: 79,
      category: "Fitness",
      rating: 3,
      inventoryStatus: "OUTOFSTOCK",
      orders: [],
    },
  ];
});

const onRowExpand = (event) => {
  toast.add({
    severity: "info",
    summary: "Product Expanded",
    detail: event.data.name,
    life: 3000,
  });
};
const onRowCollapse = (event) => {
  toast.add({
    severity: "success",
    summary: "Product Collapsed",
    detail: event.data.name,
    life: 3000,
  });
};
const expandAll = () => {
  expandedRows.value = products.value.reduce(
    (acc, p) => (acc[p.id] = true) && acc,
    {}
  );
};
const collapseAll = () => {
  expandedRows.value = null;
};
const formatCurrency = (value) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warn";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
const getOrderSeverity = (order) => {
  switch (order.status) {
    case "DELIVERED":
      return "success";

    case "CANCELLED":
      return "danger";

    case "PENDING":
      return "warn";

    case "RETURNED":
      return "info";

    default:
      return null;
  }
};
</script>
