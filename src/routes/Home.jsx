import '../SASS/Home.scss'

export default function Home(){
    return(
        <>
        <main>
            <div className='parte_esquerda'>  

                <section className="sessao_imagem"> 
                    <img src="src\assets\img1.png" alt="Imagem começo" />
                </section>

                <section className="apresentacao">
                    <div className="bloco_apresentacao"> 
                        <h1> Medicamentos disponíveis em Postos de Saúde </h1>

                        <div className="texto">
                            <p> A MedSearch apresenta a solução ideal para verificar a disponibilidade do seu medicamento nos postos de saúde, proporcionando maior comodidade ao evitar a necessidade de sair de casa desnecessariamente. Descubra de forma rápida e fácil se o remédio desejado já está disponível em estoque. </p>
                            <p className='paragrafo'> Além disso, nosso sistema é projetado para fornecer atualizações em tempo real, garantindo que você tenha as informações mais recentes sobre a disponibilidade de medicamentos. Isso significa que você pode planejar suas idas ao posto de saúde de maneira mais eficiente, economizando tempo e esforço. A MedSearch está comprometida em tornar o acesso a medicamentos mais fácil e conveniente para todos. </p>
                        </div>
                    </div>

                    <button> Mais informações </button>
                </section>
            </div> 

            <div className="parte_direita">

                <section className="explicacao"> 

                    <div className="bloco1"> 
                        <h2> O que é a solução ? </h2>
                        <p> A essência desta iniciativa é simplificar a vida das pessoas em relação aos postos de saúde. O propósito é comunicar à população que o medicamento desejado já está disponível no estoque do posto, eliminando a necessidade de sair de casa. Essa abordagem visa especialmente beneficiar aqueles que enfrentam dificuldades para sair com frequência, como idosos, mulheres grávidas, cadeirantes e outros públicos. Queremos proporcionar comodidade e informação, garantindo que todos tenham acesso rápido e fácil às informações sobre a disponibilidade de seus medicamentos.</p>
                    </div>

                    <div className="bloco2"> 
                        <h2> O que ela fará ? </h2>
                        <p> A MedSearch realizará uma análise da quantidade de medicamentos, levando em consideração o peso de cada um. Em seguida, disponibilizará na rede a quantidade exata presente no estoque, proporcionando uma visualização facilitada para os usuários. Isso se revela particularmente útil para aqueles que buscam um medicamento específico, desejam evitar filas ou enfrentam limitações para sair com frequência de suas residências. Nosso objetivo é oferecer uma solução eficiente, permitindo que os usuários acessem as informações necessárias de maneira rápida e conveniente. </p>
                    </div>

                    <div className="bloco3"> 
                        <h2> Como funcionará ? </h2>
                        <p> O funcionamento do sistema envolverá componentes como o ESP32 e uma balança de 5kg. Essa combinação permitirá a transmissão das informações sobre a quantidade de medicamentos em estoque para a rede. Cada medicamento será pesado individualmente, e os resultados serão compartilhados na rede, proporcionando uma visualização fácil e clara para os usuários por meio do protótipo. Dessa forma, a tecnologia utilizada garantirá uma precisão na informação transmitida, contribuindo para uma experiência eficiente e transparente. </p>
                    </div>

                </section>
            </div>

            <h2> Vantagens </h2>

        </main>

        <section className="vantagens">      
            <div className="parte1">
                
                <img src="src\assets\tarefa.png" alt="icone1" />

                <div className="parte_texto">
                    <h3> 01 </h3>
                    <h4> Atualizações diárias </h4>
                    <p> Monitoramento e atualização do estoque são feitas diariamente, tornando as informações sempre atualizadas.</p>
                </div>

            </div>

            <div className="parte2">
                <img src="src\assets\tarefa.png" alt="icone2" />

                <div className="parte2_texto">
                    <h3> 02 </h3>
                    <h4> Fuga de filas </h4>
                    <p> Não será preciso ficar em filas, já que nosso serviço irá mostrar o produto em estoque e poderá busca-lo a qualquer momento. </p>
                </div>
                
            </div>

            <div className="parte3">
                <img src="src\assets\tarefa.png" alt="icone3" />

                <div className="parte3_texto">
                    <h3> 03 </h3>
                    <h4> Acesso simples </h4>
                    <p> O cuidado com a simplicidade de acesso é algo vantajoso para pessoas que não possuem conhecimentos tecnológicos. </p>
                </div>
                
            </div>
        </section>
        </>
    )
}