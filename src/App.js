
import React, { useState, userEffect } from 'react';
import './App.css';
import Resultado from './Resultado';
import potencia from "./imagens/energiaSolarPotencia.png"
import painelSolar from "./imagens/painelsolar.png"
import intall from "./imagens/painelSolarInstall.png"
import producao from "./imagens/painelSolarProducao.png"
import ecomonia from "./imagens/energiaSolarEconomia.png"
import custo from "./imagens/paineisSolaresCusto.png"


function App() {
  
  const [simulando, setSimulando] = useState(false);
  const [gastoMensal, setGastoMensal] = useState("");
  const [potenciaInstalada, setPotenciaInstalada] = useState(0);
  const [areaMinima, setAreaMinima] = useState(0);
  const [valorProduto, setValorProduto] = useState("");
  const [producaoMensal, setProducaoMensal] = useState("");
  const [economiaAnual, setEconomiaAnual] = useState("");
  const [tempoRetornoInvestimento, setTempoRetornoInvestimento] = useState("");


  const calcularResultados = () => {
    const gastoMensalFloat = parseFloat(gastoMensal);

    if (!isNaN(gastoMensalFloat)) {
      const potenciaInstaladaResultado = gastoMensalFloat * 1.65;
      const areaMinimaResultado = potenciaInstaladaResultado * 10;
      const valorProdutoResultado = ` Entre R$ ${potenciaInstaladaResultado * 1988.33} e R$ ${potenciaInstaladaResultado * 2595.73}`;
      const producaoMensalResultado = `${potenciaInstaladaResultado * 158.5} kWh/mês`;
      const economiaAnualResultado = ` R$ ${gastoMensalFloat * 12 - potenciaInstaladaResultado * 158.5 * 0.61}`;
      const tempoRetornoInvestimentoResultado = ` Entre ${Math.ceil(potenciaInstaladaResultado * 1988.33 / (gastoMensalFloat * 12 - potenciaInstaladaResultado * 158.5 * 0.61))} anos`;

      setPotenciaInstalada(potenciaInstaladaResultado);
      setAreaMinima(areaMinimaResultado);
      setValorProduto(valorProdutoResultado);
      setProducaoMensal(producaoMensalResultado);
      setEconomiaAnual(economiaAnualResultado);
      setTempoRetornoInvestimento(tempoRetornoInvestimentoResultado);
      setSimulando(true);
    } else {
      alert("Por favor, insira um valor de gasto mensal válido.");
    }
  };
  
  return (
    
    <div className="App">
      <header>
        <h1 className = 'ufersa'>UFERSA Solar</h1>
      </header>
      
      <h1>Simulador de Energia Solar</h1>
      <div>
        {/* Seleção do Tipo de Local */}
        <h2>Selecione o tipo do local que irá instalar o gerador</h2>
        <select>
          <option value="residencia">Residencial</option>
          <option value="comercio">Empresarial</option>
          <option value="industria">Agronegócio</option>
        </select>
      </div>
      <div>
        <h2>Onde pretende realizar a instalação?</h2>
        {/* Digite o CEP, cidade, Bairro ou Rua */}
        <input type="text" placeholder="Digite o CEP, cidade, Bairro ou Rua" />
      </div>

      <div>
        {/* Botão de Localização Atual */}
        <button>Usar Localização Atual</button>
      </div>
      <div>
        <h2>Quanto é o seu gasto médio mensal com conta de luz?</h2>
        {/* Gasto Mensal com Conta de Luz */}
        <input
          type="text"
          value={gastoMensal}
          onChange={(e) => setGastoMensal(e.target.value)}
          placeholder="R$ 0,00"
        />
      </div>

      <div>
        {/* Insira seus dados abaixo e descubra o custo do seu gerador solar e quanto irá economizar por ano! Em caso de áreas remotas entraremos em contato. */}
        <p>Insira seus dados abaixo e descubra o custo do seu gerador solar e quanto irá economizar por ano! <br></br> Em caso de áreas remotas entraremos em contato.</p>
      </div>
      <div>
        {/* Nome */}
        <input type="text" placeholder="Nome" />
      </div>
      <div>
        {/* E-mail */}
        <input type="text" placeholder="E-mail" />
      </div>
      <div>
        <input
          type="checkbox"
          name="newsletter"
          id="newsletter"
          value="newsletter"
        />
        {/* Desejo receber novidades por e-mail */}
        <label htmlFor="newsletter">Desejo receber novidades por e-mail</label>
      </div>
      <div>
        {/* Aviso de Privacidade */}
        <input
          type="checkbox"
          name="privacy"
          id="privacy"
          value="privacy"
        />
        <label htmlFor="privacy">
          Ao enviar você concorda com a nossa <a href="#">Política de Privacidade</a>
        </label>
        {/* Aviso de Privacidade */}
      </div>
      <div>
        {simulando ? (
          <div className="resultado">
            <h2>Resultado</h2>

            <div className='unidade'>
            <div className='caixaResultado'>
              <img src={potencia} alt="painel solar"/>
              <san>Potência instalada* </san>
              <span className='resultadoPrincipal'>{potenciaInstalada} kWp</span>
            </div>

            <div className='caixaResultado'>
              <img src={painelSolar} alt="Área mínima necessária" />
              <span>Área mínima necessária* </span>
              <span className='resultadoPrincipal'>{areaMinima} m²</span>
            </div>

            <div className='caixaResultado'>
             <img src={intall} alt="Valor aproximado" />
              <span>Valor aproximado do sistema sem instalação. Somente produto*</span>
              <span className='resultadoPrincipal'>{valorProduto}</span>
            </div>

            <div className='caixaResultado'>
              <img src={producao} alt="Produção mensal" />
              <span>Produção mensal*</span>
              <span className='resultadoPrincipal'>{producaoMensal}</span>
            </div>

            <div className='caixaResultado'>
              <img src={ecomonia}alt="Produção mensal" />
              <span>Economia anual aproximada*</span>
              <span className='resultadoPrincipal'>{economiaAnual}</span>
            </div>

            <div className='caixaResultado'>
              <img src={custo} alt="Produção mensal" />
              <span>Tempo aproximado de retorno do investimento*</span>
              <span className='resultadoPrincipal'>{tempoRetornoInvestimento}</span>
            </div>

            </div>
            <button onClick={() => setSimulando(false)}>Simular Novamente</button>
          </div>
        ) : (
          <button onClick={calcularResultados}>Simular</button>
        )}
      </div>
      
    </div>
  );
}

export default App;

