const state = {
    sidewidth: "200px"
}

 
const actions = {

}

const mutations = {
    SET_SIDEWIDTH: (state, sidewidth) => {
        state.sidewidth = sidewidth;
    },
}
 
export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
