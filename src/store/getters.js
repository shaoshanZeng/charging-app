const getters = {
    sidewidth: state => { return state.sidewidth }
}


const state = {
    sidewidth: "200px"
}

const mutations = {
    SET_SIDEWIDTH: (state, sidewidth) => {
        state.sidewidth = sidewidth;
    },
}
const actions = {

}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
