<script setup lang="ts">
import { ref, reactive, inject } from 'vue';

const items = inject('students') as Student[];

console.log('items', items.values);

const dialogDelete = ref(false);

interface Student {
  ra: string;
  name: string;
  email: string;
  cpf: string;
}

const headers = reactive([
  { title: 'RA', align: 'start', sortable: false, key: 'ra' },
  { title: 'Nome', align: 'start', sortable: false, key: 'name' },
  { title: 'E-mail', align: 'start', sortable: false, key: 'email' },
  { title: 'CPF', align: 'start', sortable: false, key: 'cpf' },
  { title: 'Ações', align: 'center', sortable: false, key: 'actions' },
]);

const deleteItemConfirm = () => {
  closeDelete();
};

const closeDelete = () => {
  dialogDelete.value = false;
};

const deleteStudent = (item: Student) => {
  console.log('delete', item);
  dialogDelete.value = true;
};
</script>

<template>
  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card>
      <v-card-title class="text-h5"
        >Tem certeza que deseja excluir um item?</v-card-title
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
          >Cancel</v-btn
        >
        <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm"
          >OK</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-data-table
    :headers="(headers as any)"
    :items="items"
    :sort-by="[{ key: 'name', order: 'asc' }]"
    noDataText="Nenhum registro encontrado"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="$router.push(`/students/edit/${item.ra}`)"
      >
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteStudent(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>
