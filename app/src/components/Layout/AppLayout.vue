<template>
  <v-layout class="rounded rounded-md">
    <Navigation />
    <AppBar />
    <ContentPage>
      <template v-slot:page>
        <slot name="page-content"></slot>
      </template>
    </ContentPage>
  </v-layout>
</template>
