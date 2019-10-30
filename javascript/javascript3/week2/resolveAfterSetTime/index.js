function func(resolveAfter) {
    return new Promise((res) => {
        setTimeout(() => {
            res("I am called asynchronously")
        }, resolveAfter * 1000)
    })
};

func(6).then(value => console.log(value));
