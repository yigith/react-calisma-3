import './TodoList.css';
import React, { Component } from 'react';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      baslik: "",
      yapilacaklar: [
        { yapildiMi: false, baslik: "React Çalış"},
        { yapildiMi: false, baslik: "Konsere Git"},
        { yapildiMi: true, baslik: "Kahve İç"},
        { yapildiMi: true, baslik: "İlacını Al"}
      ]
    };
  }

  render() {
    return (
      <div className="TodoList">
        <h1>Yapacaklarım</h1>
        <form>
          <input type="text" placeholder="Ne yapacaksın?"
            value={this.state.baslik}  required
            onChange={(e) => this.setState({baslik: e.target.value})} />{" "}
          <button>Ekle</button>
        </form>
        <div>
          {
            this.state.yapilacaklar.map((oge, indeks) => 
              <div>
                <input type="checkbox" checked={oge.yapildiMi} />
                <span>{oge.baslik}</span>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default TodoList;