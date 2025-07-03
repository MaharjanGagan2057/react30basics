import Button from "./Button";

function Home() {
    return (
        <div>

            <h1>Welcome to the Home Page</h1>
            <p>This is the main landing page of our application.</p>
            <p>Feel free to explore the other pages using the navigation links.</p>
            <Button name="Register"/> 
            <Button name="Login"/>
            <Button name="Logout" />
            <Button name="Profile" />
        </div>
    )
}
// This is the main Home component that will be displayed when the user navigates to the home page of the application.
export default Home;
