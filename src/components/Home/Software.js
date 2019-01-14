import React from 'react'

const Software = ({ ...props }) => (
  <section className="section container" {...props}>

    <div className="columns">
      
      <div className="column is-4">
        <div className="card">
          <div className="card-image">
            <figure className="image is-16by9">
              <img src="/img/jasherio.png" alt="JasherIO" />
            </figure>
          </div>
          <div className="card-content">
            <h1 className="title is-5">JasherIO</h1>
            <div className="content">
              My personal site showcases articles, events, and projects I have worked on. 
            </div>
          </div>
          <footer className="card-footer">
            <a href="https://github.com/JasherIO/JasherIO" className="card-footer-item">View on GitHub</a>
          </footer>
        </div>
      </div>

      <div className="column is-4">
        <div className="card">
          <div className="card-image">
            <figure className="image is-16by9">
              <img src="/img/beyond.png" alt="Lurker" />
            </figure>
          </div>
          <div className="card-content">
            <h1 className="title is-5">Lurker</h1>
            <div className="content">
              Lurker is a web crawler that pulls data (teams, results, MMRs) from esports websites.
            </div>
          </div>
          <footer className="card-footer">
            <a href="https://github.com/JasherIO/Lurker" className="card-footer-item">View on GitHub</a>
          </footer>
        </div>
      </div>

      <div className="column is-4">
        <div className="card">
          <div className="card-image">
            <figure className="image is-16by9">
              <img src="/img/pulsarpremierleague.jpg" alt="Pulsar Premier League" />
            </figure>
          </div>
          <div className="card-content">
            <h1 className="title is-5">Pulsar Premier League</h1>
            <div className="content">
              Pulsar Premier League is an esports tournament organization primarily invested in Rocket League.
            </div>
          </div>
          <footer className="card-footer">
            <a href="https://github.com/JasherIO/PPL" className="card-footer-item">View on GitHub</a>
          </footer>
        </div>
      </div>

    </div>

      

  </section>
)

export default Software