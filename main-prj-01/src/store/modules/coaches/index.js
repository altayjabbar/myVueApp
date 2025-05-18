import mutations from './mutation.js';
import getters from './getters.js';
import actions from './actions.js';



export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Anna',
                    lastName: 'Smith',
                    areas: ['frontend', 'career'],
                    description:
                        'I’m Anna, a frontend specialist with a passion for teaching and mentoring new developers.',
                    hourlyRate: 25
                },
                {
                    id: 'c3',
                    firstName: 'John',
                    lastName: 'Doe',
                    areas: ['backend', 'career'],
                    description:
                        'Backend development is my thing! I’ve worked in large-scale applications and love sharing knowledge.',
                    hourlyRate: 28
                },
                {
                    id: 'c4',
                    firstName: 'Emily',
                    lastName: 'Zhao',
                    areas: ['frontend', 'backend'],
                    description:
                        'Full-stack developer with 7+ years experience. Let’s dive into real-world projects together!',
                    hourlyRate: 32
                }
            ]

        }
    },
    mutations,
    getters,
    actions

}