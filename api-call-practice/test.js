console.log("welcome")

const taskOne = () =>{
    return new Promise ((resolve, reject)=>{
        resolve ("task one is completed")
    })
}

const taskTwo = () =>{
    return new Promise ((resolve, reject)=>{
        resolve ("task 2 is completed")
    })
}

const taskThree = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("task 3 completed")
        }, 2000)
    })
}

const taskFour = () =>{
    return new Promise ((resolve, reject)=>{
        reject ("task 4 is not completed")
    })
}

const taskFive = () =>{
    return new Promise ((resolve, reject)=>{
       reject ("task 5 is not completed")
    })
}

// taskOne()
// .then((res)=> console.log(res))
// .then(taskTwo)
// .then(res => console.log(res))
// .then(taskThree)
// .then(res => console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .then(taskFive)
// .then(res => console.log(res))
// .catch(err => console.log(err))


const useAsyn = async () =>{

    try {

        
    const t3 = await taskThree();
    console.log(t3)

    const t1 = await taskOne();
    console.log(t1)

    const t2 = await taskTwo();
    console.log(t2)


    const t4 = await taskFour();
    console.log(t4)

    const t5 = await taskFive();
    console.log(t5)
    } catch (error) {
        console.log(error)
    }

    // const t1 = await taskOne();
    // console.log(t1)

    // const t2 = await taskTwo();
    // console.log(t2)

    // const t3 = await taskThree();
    // console.log(t3)

    // const t4 = await taskFour();
    // console.log(t4)

    // const t5 = await taskFive();
    // console.log(t5)
}

useAsyn()

console.log("end")