import api from '../../fetch/api'
import * as types from '../types'

const state = {
    sportsList: [],
    searchKey: {
        page: 0,
        limit: 20
    },
    scroll: true
}

const actions = {
    /**
     * 获取约跑步列表
     */
    getSportsList({ commit }) {
        if(state.scroll) {
            commit(types.GET_SPORTS_PAGE_NUM)
            commit(types.COM_LOADING_STATUS, true),
            commit(types.GET_SPORTS_SCORLL_STATUS, false)
            api.SportsList()
                .then(res => {
                    console.log(res)
                    commit(types.COM_LOADING_STATUS, false),
                    commit(types.GET_SPORTS_SCORLL_STATUS, true)
                    commit(types.GET_SPORTS_LIST, res)
                })
        }
    }
}

const getters = {
    sportsList: state => state.sportsList
}

const mutations = {
    [types.GET_SPORTS_LIST](state, res) {
        if(state.searchKey.page <= 1) {
            state.sportsList = [{"joinMax":"5","content":"不来参加吧。。。","endTime":{"__type":"Date","iso":"2016-11-16T08:47:00.000Z"},"joinUser":["58d88609a22b9d00646ada5f"],"title":"bu跑队","releaseUsername":"hzzly","releaseUserId":"57a1f1150a2b58005828c312","cantJoinTime":{"__type":"Date","iso":"2016-11-16T08:47:00.000Z"},"beginTime":{"__type":"Date","iso":"2016-11-16T08:47:00.000Z"},"releaseTime":"2016-11-16 16:51:08","destination":"江西 南昌 新建县 东华理工大学","objectId":"582c1dfd2e958a0069b30768","createdAt":"2016-11-16T08:51:09.087Z","updatedAt":"2017-03-27T03:27:12.438Z"},{"joinMax":"5","content":"","endTime":{"__type":"Date","iso":"2016-08-27T12:13:00.000Z"},"joinUser":["57a1f1150a2b58005828c312"],"title":"来吗","releaseUsername":"hzzly","releaseUserId":"57a1f1150a2b58005828c312","cantJoinTime":{"__type":"Date","iso":"2016-08-27T12:13:00.000Z"},"beginTime":{"__type":"Date","iso":"2016-08-27T12:13:00.000Z"},"releaseTime":"2016-08-27 20:14:15","destination":"天津 天津市 和平区 都觉得你的背包大小姐惊喜","objectId":"57c18416efa631005ab356f1","createdAt":"2016-08-27T12:14:14.884Z","updatedAt":"2017-02-24T01:51:51.354Z"}]
        } else {
            state.sportsList = state.sportsList.concat(res.data)
        }
    },
    [types.GET_SPORTS_SEARCH_KEY](state, params) {
        state.searchKey = params
    },
    [types.GET_SPORTS_PAGE_NUM](state) {
        state.searchKey['page'] += 1
    },
    [types.GET_SPORTS_SCORLL_STATUS](state, status) {
        state.scroll = status
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
