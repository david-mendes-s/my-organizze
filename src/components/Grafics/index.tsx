import { Container } from "./style";
import Chart from 'react-apexcharts'
import { ApexOptions } from "apexcharts";
import { useTransaction } from "../hooks/useTransactions";

export function Grafics(){
  const {transactions} = useTransaction();
  
  const teste = transactions.reduce((acc, curr) => {

    if(curr.isType === 'Saída'){
      if(curr.optionsCategories.name === 'alimentação'){
        acc.alimentação += curr.amountTransaction;
      }

      if(curr.optionsCategories.name === 'assinaturas'){
        acc.assinaturas += curr.amountTransaction;
      }

      if(curr.optionsCategories.name === 'educação'){
        acc.educação += curr.amountTransaction;
      }

      if(curr.optionsCategories.name === 'lazer'){
        acc.lazer += curr.amountTransaction;
      }

      if(curr.optionsCategories.name === 'casa'){
        acc.casa += curr.amountTransaction;
      }
    
      if(curr.optionsCategories.name === 'mercado'){
        acc.mercado += curr.amountTransaction;
      }

      if(curr.optionsCategories.name === 'transporte'){
        acc.transporte += curr.amountTransaction;
      }

      if(curr.optionsCategories.name === 'salário'){
        acc.salário += curr.amountTransaction;
      }

      if(curr.optionsCategories.name === 'investimentos'){
        acc.investimentos += curr.amountTransaction;
      }
    }

    return acc;
  }, {
    alimentação: 0,
    assinaturas: 0,
    educação: 0,
    lazer: 0, 
    casa:0, 
    mercado:0, 
    transporte:0, 
    salário:0, 
    investimentos:0
})
     
    const option:ApexOptions = {
      
    series: [{
        data: [teste.alimentação, teste.assinaturas, teste.educação, teste.lazer,
          teste.casa, teste.mercado, teste.transporte, teste.salário, teste.investimentos
        ] 
      }],
        chart: {
          type: 'bar',
          toolbar: {
            show: true,
            tools: {
              download: false
            }         
          }
          
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 2,
            distributed: true,
          }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
        },
        xaxis: {
          categories:  ['alimentação', 'assinaturas', 'educação',
          'lazer', 'casa', 'mercado', 'transporte', 'salário', 'investimentos'
                      ]
        },
        colors: ['#f1c40f', '#9b59b6', '#ff3f34', '#20bf6b', 
        '#B33771', '#F97F51', '#2d98da', '#4cd137', '#FC427B'
        ],
        legend: {
          show: false,
        },
    }

    return(
        <Container>
       
            <h3>Gastos por Categoria</h3>
            <Chart
                height={450}
                width={450}
                options={option}
                type={"bar"}
                series={option.series} 
            /> 
          
        </Container>
    );
}

/* const [categories, setCategories] =useState<Icategory[]>();

// O useEffect é executado quando o componente é renderizado
useEffect(() => {
  // Objeto para armazenar os nomes e montantes das categorias
  const categoriess: { [key: string]: number } = {};

  // Percorre o array de transações
  for (const transaction of transactions) {
    if(transaction.isType === 'Saídas'){
        // Verifica se a categoria já existe no objeto
      if (categoriess[transaction.optionsCategories.name]) {
        // Se existir, adiciona o valor da transação ao montante da categoria
        categoriess[transaction.optionsCategories.name] += transaction.amountTransaction;
      } else {
        // Se não existir, cria uma nova entrada no objeto com o nome e o montante da categoria
        categoriess[transaction.optionsCategories.name] = transaction.amountTransaction;
      }
    }  
  }
  // Atualiza o estado com o objeto de categorias
  setCategories(transactions.map(list => {

    

    return {
      name: list.optionsCategories.name,
      amount: list.amountTransaction 
    }
  }));
  
}, [transactions]);
console.log(categories?.map(list => list.amount) );
 */