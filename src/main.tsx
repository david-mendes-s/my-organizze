import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer, Model} from 'miragejs';
import App from './App';

createServer({

  models: {
    category: Model,
    bank: Model,
    account: Model,
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      categories: [
        {
          id: 1,
          name: 'alimentação'
        },
        {
          id: 2,
          name: 'educação'
        },
        {
          id: 3,
          name: 'assinaturas'
        },
        {
          id: 4,
          name: 'lazer'
        },
        {
          id: 5,
          name: 'casa'
        },
        {
          id: 6,
          name: 'mercado'
        },
        {
          id: 7,
          name: 'transporte'
        },
        {
          id: 8,
          name: 'salário'
        },
        {
          id: 9,
          name: 'investimentos'
        },
      ],
      banks: [
        {
          id: 1,
          name: 'NuBank'
        },
        {
          id: 2,
          name: 'Bradesco'
        },
        {
          id: 3,
          name: 'Banco do Brasil'
        },
        {
          id: 4,
          name: 'Santander'
        },
        {
          id: 5,
          name: 'Itaú'
        },
        {
          id: 6,
          name: 'Outro'
        },
      ]
    })
  },

  routes(){
    this.namespace = "api";

    this.get('/category', () => {
      return this.schema.all('category');
    })

    this.get('/bank', () => {
      return this.schema.all('bank');
    })

    this.get('/account', () => {
      return this.schema.all('account');
    })

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/account', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('account', data);
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      //console.log(data);
      return schema.create('transaction', data);
    })

  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
