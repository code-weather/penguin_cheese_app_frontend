import {useState} from "react"
import {Link} from "react-router-dom"

const Index = (props) => {

    // state to hold form data
    const [newForm, setNewForm] = useState({
        name: "",
        countryOfOrigin: "",
        image: ""
})

//handleChange function to sync input with state
const handleChange = (event) => {
    // make a copy of state
    const newState = {...newForm}
    // update the newState
    newState[event.target.name] = event.target.value
    // update the state
    setNewForm(newState)
}

// handleSubmit function for when form is submitted
const handleSubmit = (event) => {
    // prevent the page from refreshing
    event.preventDefault()
    // pass the form data to createCheese function

    // This props.createCheese(newForm) is giving me an error
    props.createCheeses(newForm)
    // reset the form to empty
    setNewForm({
        name: "",
        countryOfOrigin: "",
        image: ""
    })
}

const form = (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
    />
    <input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
    />
        <input
        type="text"
        value={newForm.countryOfOrigin}
        name="countryOfOrigin"
        placeholder="countryOfOrigin"
        onChange={handleChange}
    />
    <input type="submit" value="Create Cheese" />
    </form>
);

if (props.cheeses) {
    return (
        <section>
            {form}
            {props.cheeses.map((cheese) => {
                return (
                    <div key={cheese._id} className="cheese">
                        <Link to={`/cheese/${cheese._id}`}>
                            <h1>{cheese.name}</h1>
                        </Link>
                        <h3>Country of Origin: {cheese.countryOfOrigin}</h3>
                        <img src={cheese.image} alt={cheese.name} />
                    </div>
            );
            })}
        </section>
        );
    } else {
    return (
        <section>
            {form}
            <h1>Loading...</h1>
        </section>
    );
}
};

export default Index;