<template>
    <div>
        <nav>

            <v-toolbar 
                dense 
                color="deep-purple" 
                dark
            >
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>Vue</v-toolbar-title>

                <v-spacer></v-spacer>
   

                <v-btn
                    @click="cerrarSesion"
                >
                    <span class="mr-2">Cerrar Sesión</span>
                    <v-icon>fas fa-sign-out-alt</v-icon>
                </v-btn>
            </v-toolbar>

            <v-navigation-drawer color="indigo" v-model="drawer" app>

                <v-layout column align-center mt-5>
                    <v-flex>
                        <v-avatar
                        size="56"
                        >
                            <img :src="usuario.foto" alt="avatar">
                        </v-avatar>
                    </v-flex>

                    <v-flex>
                        <p class="mt-3 white--text">{{usuario.nombre}}</p>
                    </v-flex>
                </v-layout>

                <v-divider></v-divider>

                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
                        <v-list-item-icon>
                            <v-icon class="white--text">{{item.icon}}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="white--text">{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

            </v-navigation-drawer>

        </nav>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            drawer: true,
            items: [
                {title: 'Dashboard', icon: 'fas fa-lemon', to: {name: 'home'}},
                {title: 'Account', icon: 'fas fa-user-circle', to: {name: 'ingreso'}},
                {title: 'Admin', icon: 'fas fa-key', to: {name: 'admin'}}
            ]
        }
    },
    methods: {
        ...mapActions(['cerrarSesion'])
    },
    computed: {
        ...mapState(['usuario'])
    }
}
</script>