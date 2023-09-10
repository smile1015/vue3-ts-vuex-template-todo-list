interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS;
}

enum TODO_STATUS {
    WILLDO = 'willdo',
    DOING = 'doing',
    FINISHED = 'finished'
}

interface IState {
    list: ITodo[]
}

export {
    ITodo,
    TODO_STATUS,
    IState
}