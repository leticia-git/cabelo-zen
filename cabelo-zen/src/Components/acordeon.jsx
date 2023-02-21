import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import Terapia from '../img/terapia-capilar.jpg';
import Vapor from '../img/vapor.png';
import Aroma from '../img/aroma.png';
import Frequencia from '../img/frequencia.png';
import Micro from '../img/micro.png';
import Laser from '../img/laser.png';
import Massagem from '../img/massagem.png';

export default function SimpleAccordion() {
    return (
        <div>
            <h2>Serviços Oferecidos</h2>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Terapia Capilar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="acordeon-item">
                            <div className="textos-acordeon">
                                <p>Yoga na terapia Capilar! Sabe como funciona? Gostaria de experimentar?</p>
                                <p>Já é comprovado que várias doenças relacionadas com o couro cabeludo são desencadeadas por fatores emocionais, como ansiedade, depressão e estresse.</p>
                                <p>Pessoas com desequilíbrio emocional possuem um sistema imunológico muito mais debilitado, e se tiver um nível de estresse grande há uma alteração nos níveis de cortisol na corrente sanguínea afetando a digestão e absorção dos nutrientes essenciais como vitaminas e sais minerais essências para o crescimento e fortalecimento dos fios.
                                </p>
                                <p>Por isso temos um tratamento inovador de terapia capilar, onde incluímos o Yoga na sessão pois entendemos que não é só um tratamento externo e que precisamos também olhar para a parte dentro, olhar para a parte emocional com carinho e aprender diariamente a mantê-la em equilíbrio.
                                </p>
                                <p>E o Yoga possui ferramentas poderosíssimas que ajudam a equilibrar as questões emocionais, físicas e espirituais, através de suas técnicas aprendemos a respirar melhor, a alongar o corpo, a estar mais presente, a meditar e também a relaxar. E é impressionante como resultado realmente acontece e com a prática constante é possível ter uma diminuição da ansiedade, depressão, estresse e muitos benefícios no corpo.
                                </p>
                                <p>Gostou? Então marca uma avaliação com nossa Tricologista Jaci e professora de Yoga e venha conhecer o nosso espaço CabeloZen.
                                </p>
                            </div>
                            <div className="img-servicos">
                                <Image src={Terapia} alt='CabeloZen' />
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Vapor de Ozonio</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="acordeon-item">
                            <div className="textos-acordeon">
                                <p>Vapor de Ozônio! Conhece essa técnica maravilhosa para os fios e couro cabeludo? </p>
                                <p>Uma técnica que utiliza um aparelho específico que possui um sistema que gera o ozônio (O3) e em conjunto com água o vapor de ozônio é liberado oferecendo inúmeros benefícios para o couro cabeludo e fios.</p>
                                <p>Sua ação terapêutica no couro cabeludo promove ação bactericida e fungicida que ajudam a equilibrar a microbiota do couro cabeludo evitando foliculite, caspa e dermatite seborreica.
                                </p>
                                <p>Já para os fios ajuda a permear melhor os ativos utilizados nos cronogramas capilares, e além disso oferece vários benefícios como redução de frizz e pontas duplas, também atua no fortalecimento dos fios, promovendo mais crescimento, e proporciona brilho e maciez.
                                </p>
                                <p>Que tal experimentar essa técnica maravilhosa e deixar seu couro cabeludo e fios super saudáveis? Agende uma consulta com nossa Tricologista Jaci e visite o nosso espaço CabeloZen!
                                </p>
                            </div>
                            <div className="img-servicos">
                                <Image src={Vapor} alt='CabeloZen' />
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Aromaterapia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="acordeon-item">
                            <div className="textos-acordeon">
                                <p>A Aromaterapia é um tratamento que traz inúmeros benefícios tanto físico quanto emocional, pois possui conjunto de técnicas que são utilizados óleos essenciais e vegetais que são extraídos diretamente das plantas medicinais e aromáticas, tendo ação funcional parecida com funções hormonais e imunológicas que estimulam diferentes partes do cérebro.</p>
                                <p>A escolha dos óleos é realizada de acordo com a necessidade do tratamento, sendo possível elaborar um tratamento personalizado com a junção do óleo essencial e o vegetal, essa união oferece um potente tratamento bactericida, viricida, antifúngico e antiqueda e quando utilizado nos tratamentos da terapia capilar podemos obter diferentes resultados com diferentes tipos de óleos essenciais e vegetais.</p>
                                <p>É um tratamento perfeito pois é natural e tem afinidade com o couro cabeludo e fios e também trata a parte emocional, pois possuem diferentes tipos de aromas com ação terapêutica que atua no sistema olfatório e límbico.
                                </p>
                                <p>E os efeitos físicos e psicológicos da Aromaterapia podem ocorrer tanto pela inalação como pela pele, por isso em nosso espaço Cabelo Zen trabalhamos com um difusor ultrassônico que vai liberando a essência durante a sessão e também com a aplicação direto no couro cabeludo e fios com os óleos essenciais escolhido de acordo com a necessidade individual.
                                </p>
                                <p>Gostou? Então agende uma consulta colm nossa Tricologista Jaci, venha conhecer nosso espaço CabeloZen e viva uma experiência inovadora.
                                </p>
                            </div>
                            <div className="img-servicos">
                                <Image src={Aroma} alt='CabeloZen' />
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography>Alta Frequência</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="acordeon-item">
                            <div className="textos-acordeon">
                                <p>Alta frequência possui vários eletrodos de vidro, onde dentro existe um gás especial que é o meio condutor do estimulo elétrico gerando faíscas elétricas que gera ozônio, onde tem inúmeras propriedades na pele e couro cabeludo.</p>
                                <p>Um tratamento específico para o couro cabeludo que proporciona um aumento da circulação sanguínea, aumento no aporte de nutrientes no bulbo, tem efeito bactericida, bacteriostática e fungicida.</p>
                                <p>É um tratamento bem completo com ação comprovada e é indicado para diferentes tratamentos como:
                                </p>
                                <ul>
                                    <li>Alopecias (queda capilar)</li>
                                    <li>Prevenção de queda de cabelos</li>
                                    <li>Foliculite</li>
                                    <li>Dermatite Seborreica</li>
                                    <li>Caspa</li>
                                    <li>Psoríase</li>
                                    <li>Limpeza do couro cabeludo</li>
                                </ul>
                                <p>Além de todos esses benefícios durante a sessão é possível sentir um relaxamento bem gostoso, como um cafuné! Quer experimentar também?</p>
                                <p>Agende uma consulta com nossa Tricologista Jaci e conheça nosso espaço CabeloZen!</p>
                            </div>
                            <div className="img-servicos">
                                <Image src={Frequencia} alt='CabeloZen' />
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <Typography>Laser Vermelho e Led Azul</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="acordeon-item">
                            <div className="textos-acordeon">
                                <p>Conhecido também como Fotobiomodulação é uma associação do Laser vermelho e Led Azul. Atualmente é considerado um dos melhores tratamentos para vários tipos de alopecias que geram a queda capilar, dermatites e caspas.</p>
                                <p>O Led Azul tem função bactericida do couro cabeludo e promove o equilíbrio da microbiota levando a morte dos fungos e bactérias que estão em excesso. Têm alguns estudos que mostram que também tem ação no bulbo, onde estimula o folículo vazio e promove o crescimento do cabelo.</p>
                                <p>O Led e Laser vermelho tem a função de promover a proliferação das células, já que seu estimulo é diretamente na mitocôndria da célula dos cabelos que é o local onde gera ATP(energia), e a célula do cabelo precisa de muita energia porque que tem um crescimento muito rápido, cerca de 1 cm por mês, então quanto mais ATP (energia) as células tiverem mais elas se proliferam e fios nascem e crescem. Sua ação também estimula as células troncos do bulge promovendo mais produção de fios.
                                </p>
                                <p>São muitos benefícios que o tratamento de Fotobiomodulação oferece e selecionamos os principais:</p>
                                <ul>
                                    <li>Combate a queda capilar</li>
                                    <li>Estimula o crescimento</li>
                                    <li>Melhora a densidade dos fios e espessura.</li>
                                    <li>Diminui a inflamação</li>
                                    <li>Elimina fungos e bactérias</li>
                                </ul>
                                <p>Gostaria de conhecer os benefícios desse tratamento incrível com Led e Laser?
                                    Agenda uma consulta e faça a avaliação com nossa Tricologista e conheça o nosso espaço CabeloZen que é incrível.</p>
                            </div>
                            <div className="img-servicos">
                                <Image src={Laser} alt='CabeloZen' />
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                >
                    <Typography>Microagulhamento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="acordeon-item">
                            <div className="textos-acordeon">
                                <p>O Microagulhamento é uma técnica que consiste na produção de múltiplas e finas perfurações na pele por meio de aparelhos como dermaroller ou a caneta elétrica. É um procedimento estético que vem ganhando espaço nos últimos anos, principalmente no couro cabeludo, já que oferece resultados excelentes em tratamentos de queda capilar.</p>
                                <p>As perfurações realizadas por essa técnica liberam fatores de crescimentos que estimulam o crescimento dos fios, além disso o procedimento é associado a um ativo especifico para tratar a queda e as perfurações melhoram a permeabilidade desses ativo gerando o Drug Delivery, que é a entrega do ativo no lugar mais próximo do bulbo.</p>
                                <p>Essa técnica é indicada para alopecia androgenética masculina (calvície) e feminina, promovendo os benefícios abaixo:
                                </p>
                                <ul>
                                    <li>Ajuda na formação de colágeno</li>
                                    <li>Neovascularização</li>
                                    <li>Ativa liberação de fatores de crescimentos</li>
                                    <li>Facilita a permeação de medicamentos</li>
                                    <li>Estimula as células da papila dérmica a promoverem crescimento dos fios</li>
                                </ul>
                                <p>Gostaria de experimentar essa técnica? Venha fazer uma avaliação em nosso espaço CabeloZen que temos a melhor Tricologista com os melhores equipamentos.</p>
                            </div>
                            <div className="img-servicos">
                                <Image src={Micro} alt='CabeloZen' />
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                >
                    <Typography>Massagem Epicrânia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="acordeon-item">
                            <div className="textos-acordeon">
                                <p>É um conjunto de manobras e manipulações realizadas com riqueza de movimentos suaves e profundos, lentos e rápidos através das mãos e aplicadas na região do rosto e couro cabeludo, tendo a função de estimular no organismo humano efeitos fisiológicos que influenciam a vitalidade, nutrição e beleza do folículos pilosos e couro cabeludo.</p>
             
                                <p>Listamos os principais benefícios da massagem epicrânia na terapia capilar:
                                </p>
                                <ul>
                                    <li>Aumento do Retorno Venoso</li>
                                    <li>Aumento do Aporte Arterial</li>
                                    <li>Aumento da Nutrição Tecidual</li>
                                    <li>Melhora na circulação</li>
                                    <li>Diminuição do estresse</li>
                                </ul>
                                <p>Que tal experimentar essa técnica relaxante e ao mesmo tempo estimulante? Agende uma consulta com nossa Tricologista e conheça o nosso espaço CabeloZen!</p>
                            </div>
                            <div className="img-servicos">
                                <Image src={Massagem} alt='CabeloZen' />
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}