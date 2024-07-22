const Main = () => {
    const me = {
        name: 'MZ',
        age: 33,
        job: 'Weapon'
    }
return (
    <div>
        <p>My name is {me.name}</p>
        <p>I am {me.age} years old.</p>
        <p>and I am a {me.job}</p>
    </div>
)
}

export default Main;