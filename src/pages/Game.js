import './Game.css';

const Game = () => {
    return(
        <div className='evrything'>
            <div id='game'><iframe src="https://ivan7994.github.io/WebGL-UnityGames/Nightmares/index.html"></iframe></div>
            <div id='descs'>
                <div id='authDesc'>
                    <h3>About the creator</h3>
                    <div className='downDesc'>
                        <div id="imgc"></div>
                        <div className="desc">
                            <h4>Ben ten</h4>
                            <p>Born in Alabama, Ben is a web develeloper with lots of passion on his projects. He says: "I love to make children smile :)"</p>
                        </div>
                    </div>
                </div>
                <div id='gameDesc'>
                    <h3>Nightmares</h3>
                    <p>This shooter game where you move with WASD and aim and shoot with left click is based in a children nightmare and how he is able to overcome his fears thanks to a machingun</p>
                </div>
            </div>
        </div>
    );
}

export default Game;