import '../styles/home.css';

function HomePage() {
    return (
        <div class="home">
            <div class="title">
                <h1>Faites briller vos espaces de vie !</h1>
                <img class="cleaning-car rounded" src={process.env.PUBLIC_URL + '/img/cleaning-car.png'} alt="cleaning" />
            </div>
        </div>
    );
}

export default HomePage;