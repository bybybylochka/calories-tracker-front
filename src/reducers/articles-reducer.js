let initialState = {
    articles: [
        { articleId: 1,
          title: "Польза груш для ЖКТ",
          text: "Груши – кладезь полезных веществ, незаменимых для организма"
        },
        { articleId: 2,
            title: "Чем опасна газировка?",
            text: "По статистике, сладкую газировку время от времени пьют более 75% жителей СНГ"
        },
        { articleId: 3,
            title: "Что купить к чаю?",
            text: "Что купить к чаю из выпечки: полезные советы и рекомендации от диетолога"
        },
        { articleId: 4,
            title: "Готовим ПП-мороженое",
            text: "ПП-мороженое готовить так же несложно, как и другие варианты этого десерта"
        },
        { articleId: 5,
            title: "aaaaaaaaa",
            text: ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"
        }
    ]
}

const articlesReducer = (state = initialState, action) => {
    switch (action.type){
        default: return state;
    }
}

export default articlesReducer;