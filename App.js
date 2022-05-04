import React,{Component} from 'react';
import { FlatList, StatusBar, SafeAreaView } from 'react-native';
import api from './src/services/Api';
import Dados from './src/Tela/Dados/Index';

export default class APP extends Component{ /*nesse caso o componente está sendo por meio de classe já que é 
um jeito mais facil de se criar um State e também é um meio diferente de se fazer um componente*/ 
  constructor(props){ // criando um construtor para acessar as props
    super(props); //permissão para utilizar as props
    this.state = { //criação de um estado 
      dados: [] //criação de um array vazia qua vai armazenar os dados vindos da API
    }
  }

  async componentDidMount(){ // função que é chamada sempre quando o APP for carregado
    const response = await api.get('/todos'); // const que indica qual metodo eu estou utilizando 
    this.setState({ // setando um valor no estado que eu criei
      dados: response.data // armazenando os dados que eu obtive na API
    })
  }

  render(){
    return(
      <SafeAreaView>
        <StatusBar />
        <FlatList 
          data={this.state.dados}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Dados data={item} />}
        />
      </SafeAreaView>
    )
  }
}


