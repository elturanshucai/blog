export const getCommentsData = async () => {
    return [
        {
            _id: '1',
            user: {
                _id: 'a',
                name: 'Elturan Shujai'
            },
            desc: "Ay xaim yer ged",
            post: '1',
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000"
        },
        {
            _id: '2',
            user: {
                _id: 'b',
                name: 'Nicat Hetemov'
            },
            desc: "vs atag??",
            post: '1',
            parent: '1',
            replyOnUser: "a",
            createdAt: "2022-12-30T17:22:05.092+0000"
        },
        {
            _id: '3',
            user: {
                _id: 'c',
                name: 'Subhan Mesimov'
            },
            desc: "Basin burax valo gedek",
            post: '1',
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000"
        },
        {
            _id: '4',
            user: {
                _id: 'a',
                name: 'Elturan Shujai'
            },
            desc: "Pul senlikdi",
            post: '1',
            parent: "3",
            replyOnUser: "c",
            createdAt: "2022-12-31T17:22:05.092+0000"
        },
        {
            _id: '5',
            user: {
                _id: 'a',
                name: 'Elturan Shujai'
            },
            desc: "Botumsan",
            post: '1',
            parent: "1",
            replyOnUser: "b",
            createdAt: "2022-12-31T17:22:05.092+0000"
        },
    ]
}