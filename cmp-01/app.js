const app = Vue.createApp({});

app.component('friend-contact', {
    template: `
      <li >
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ dataisVisible ? 'Hide' : 'Show' }}</button>
        <ul v-if="dataisVisible">
          <li><strong>Phone:</strong> {{ friend.phone }}</li>
          <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
      </li>

    `,
    data() {
        return {
            dataisVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '02340506005',
                email: 'manuel@gmail.com',
            }

        };
    },
    methods: {
        toggleDetails() {
            this.dataisVisible = !this.dataisVisible;
        }
    }
});

app.mount("#app");
