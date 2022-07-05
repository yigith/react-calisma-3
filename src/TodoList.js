import './TodoList.css';
import React, { Component } from 'react';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baslik: "",
      yapilacaklar: [
        { yapildiMi: false, baslik: "React Çalış" },
        { yapildiMi: false, baslik: "Konsere Git" },
        { yapildiMi: true, baslik: "Kahve İç" },
        { yapildiMi: true, baslik: "İlacını Al" }
      ]
    };
    this.ekle = this.ekle.bind(this);
  }

  ekle(event) {
    event.preventDefault();

    const baslik = this.state.baslik.trim();
    if (baslik == "") return;

    const yeni = {
      yapildiMi: false,
      baslik: baslik
    };

    this.setState({
      baslik: "",
      yapilacaklar: sirala(this.state.yapilacaklar.concat(yeni))
    });
  }

  sil(indeks, event) {
    event.preventDefault();
    const yeniYapilacaklar = [...this.state.yapilacaklar];
    yeniYapilacaklar.splice(indeks, 1);
    this.setState({ yapilacaklar: yeniYapilacaklar });
  }

  guncelle(indeks, event) {
    const yeniYapilacaklar = [...this.state.yapilacaklar];
    yeniYapilacaklar[indeks].yapildiMi = event.target.checked;
    this.setState({
      yapilacaklar: sirala(yeniYapilacaklar)
    });
  }

  render() {
    return (
      <div className="TodoList">
        <h1>Yapacaklarım</h1>
        <form onSubmit={this.ekle}>
          <input className="metin-kutu" name="okul" type="text" placeholder="Ne yapacaksın?"
            value={this.state.baslik} required
            onChange={(e) => this.setState({ baslik: e.target.value })} />{" "}
          <button className="dugme">Ekle</button>
        </form>
        <div className="liste">
          {
            this.state.yapilacaklar.map((oge, indeks) =>
              <div className="liste-oge" key={indeks}>
                <input className="liste-durum" type="checkbox" checked={oge.yapildiMi} onChange={(e) => this.guncelle(indeks, e)} />
                <span className="liste-baslik">{oge.baslik}</span>
                <a className="liste-sil" href="#"
                  onClick={(e) => this.sil(indeks, e)}>&times;</a>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

function sirala(liste) {
  liste.sort((a, b) => a.yapildiMi - b.yapildiMi);
  return liste;
}

export default TodoList;