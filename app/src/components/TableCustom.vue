<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';

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

let items = ref<Student[]>([]);

function initialize() {
  items.value = [
    {
      ra: '123456',
      name: 'João da Silva1',
      email: 'email@gmail.com1',
      cpf: '123.456.789-001',
    },
    {
      ra: '123456',
      name: 'João da Silva2',
      email: 'email@gmail.com2',
      cpf: '123.456.789-02',
    },
  ];
}

const deleteStudent = (item: Student) => {
  dialogDelete.value = true;
  console.log('deleting student', item.ra);
};

const deleteItemConfirm = () => {
  console.log('deleting student');
  closeDelete();
};

const closeDelete = () => {
  dialogDelete.value = false;
};

onMounted(() => {
  initialize();
});
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
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
