import './EightPart.css';



const EightPart = () => {
    return (
       <>
       <div className="resources-section">
      <div className="header">
        <span>RESOURCES</span>
      </div>
      <h2>Stay in the know</h2>
      <div className="cards">
        <div className="card">
          <img src="/public/Images/eight-pic-3.png" alt="Resource 1" />
          <h3>Excepteur sint occaecat cupidatat non proident</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            <br />
            <br />
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli
          </p>
          <button className="read-more">Read more</button>
        </div>
        <div className="card">
          <img src="/public/Images/eight-pic-2.png" alt="Resource 2" />
          <h3>Quis nostrum exercitationem ullam corporis suscipit laboriosam</h3>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
            <br />
            <br />
            nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit
          </p>
          <button className="read-more">Read more</button>
        </div>
        <div className="card">
          <img src="/public/Images/eight-pic-1.png" alt="Resource 3" />
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <p>
            Coluptatem accusantium doloremque laudantium, totam rem aperiam
            <br />
            <br />
            Aaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <button className="read-more">Read more</button>
        </div>
      </div>
    </div>
       </>
    );
};

export default EightPart;