/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useRef, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Donate from '@/components/donate';

//build

export default function Home() {
  const [activeTab, setActiveTab] = useState<'sobre' | 'ajuda'>('sobre');

   const donateSectionRef = useRef<HTMLDivElement>(null);

   const scrollToDonate = () => {
     if (donateSectionRef.current) {
       donateSectionRef.current.scrollIntoView({ behavior: 'smooth' });
     }
   };

  return (
    <div className='flex flex-col w-full h-full items-center justify-center gap-6'>
      <div className='flex flex-col text-center mt-10 gap-2'>
        <h1 className='text-2xl sm:text-4xl font-bold text-[#434242]'>Viúvo passa fome com os 2 filhos pequenos em barraco sem água e banheiro</h1>
      </div>
      <div className='flex flex-col lg:flex-row  items-start gap-8 mt-5 w-full'>
        <Card className="flex flex-col sm:px-2 sm:py-2 w-full border-b">
            <CardContent className='flex flex-row gap-1 py-2 w-full'>
              <div className="relative w-full lg:h-auto sm:relative sm:w-full">
                <img
                  src="https://www.ongsalvacao.com/wp-content/uploads/2024/10/d9f3bec8-518f-4078-abe1-7b8a19749126.png"
                  alt="avatar"
                  className="w-auto  max-w-full max-h-full rounded-md object-contain object-center"
                />
              </div>
            </CardContent>
            {/* <CardFooter className="flex mt-3">
              <svg className="h-6 w-6 mr-2 text-[#15a34a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
              <p className='text-[#15a34a] text-center'>164 corações recebidos</p>
            </CardFooter> */}
        </Card>
        {/* <Card className="flex flex-col w-full lg:w-[400px]">
          <div className='px-4 py-2'>
            <h2 className="text-2xl font-bold text-green-600 lg:text-left">Arrecadado</h2>
          </div>
          <CardContent className='flex flex-col'>
            <p className="text-3xl font-bold">R$ 29.361,41</p>
            <p className="text-md text-gray-500">Meta: R$ 40.000,00</p>
            <p className="text-md text-gray-500">Apoiadores: 599</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 w-full justify-start items-start">
            <Button className="w-full bg-[#15a34a] hover:bg-[#15a34a]"  onClick={scrollToDonate}>Quero ajudar</Button>
            <div className="flex gap-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>
                  <img src="https://www.ongsalvacao.com/wp-content/uploads/2024/10/123123124-1.svg" alt="" />
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <div className="font-semibold">Fábila Kêmila</div>
                <div className="text-sm text-gray-500">Manaus / AM</div>
              </div>
            </div>
          </CardFooter>
        </Card> */}
      </div>
      <Card className='w-full'>
        {/* <CardHeader className='flex'>
          <div className='flex gap-4'>
            <button 
              onClick={() => setActiveTab('sobre')} 
              className={`px-4 py-2 ${activeTab === 'sobre' ? 'border-b-2 border-[#15a34a] text-[#15a34a]' : 'text-gray-500'}`}>
              Sobre
            </button>
            
          </div>
        </CardHeader> */}
        <CardContent>
        {activeTab === 'sobre' && (
            <div>
              <p className='leading-[35px] text-[16px]'>
                <span className='font-bold text-md'>
                  📋 Ficha Médica Verificada ✅
                </span><br />

                <span className='font-bold'>
                  Eles perderam a mãe, e diante de tanta saudade, ainda sofrem com a fome… não pedem brinquedo.
                </span><br />

                Vitória de 11 anos pede um banheiro, “um banheiro de gente”. Já o Samuel, de 9 anos, mostra o seu sapato todo rasgado e pede um tênis preto pra ir à escola.<br /> 

                Daniel ficou viúvo e sozinho com os filhos. Moram num barraco de apenas um cômodo em Presidente Figueiredo (AM) que ele mesmo construiu.<br /> 

                <span className='font-bold'>
                Vivem isolados, sem água encanada e sem banheiro…
                </span>
              </p>
              <div className="relative w-full">
                <img src="https://www.ongsalvacao.com/wp-content/uploads/2024/10/45514008-18fa-4701-846b-5d45645ed14e.jpeg" alt="" className="w-full lg:h-[400px] object-contain object-center" />
              </div>
              <p className='leading-[35px] text-[16px]'>
                 Sua esposa e mãe das crianças, Celiuza, faleceu há 1 ano, aos 47 anos de idade, após uma dolorosa batalha contra o câncer. 
                <br />
                Eles estavam juntos havia 19 anos, e a morte dela desestruturou a família. Celiza ajudava na renda de casa fazendo faxinas enquanto as crianças ficavam na escola.
                <br />
                Sem apoio e enfrentando conflitos com a família da esposa, que segundo Daniel, não tratava bem seus filhos, deixou Manaus e se mudou para o interior, onde construiu com as próprias mãos esse cômodo.
                <br />
                <span className='font-bold'>
                Apesar das dificuldades, esse pai faz de tudo para manter os filhos na escola, enquanto tenta garantir o sustento.
                </span>
                <br />
              </p>
              <div className="relative w-full">
                <img src="https://www.ongsalvacao.com/wp-content/uploads/2024/10/02d7d7f8-6f2b-4dd5-beea-13cdf764ab3b.jpeg" alt="" className="w-full lg:h-[400px] object-contain object-center" />
              </div>
              <p className='leading-[35px] text-[16px]'>
                Daniel faz bicos limpando terrenos e capinando, são trabalhos exaustivos que pagam pouco e exigem muito esforço físico.
                <br />
                <span className='font-bold'>
                A situação é tão difícil que, quando Daniel consegue uma marmita após um dia de trabalho, ele a guarda para que seus filhos tenham algo para comer à noite, muitas vezes passando o dia sem se alimentar. 
                </span>
                <br />
                Daniel e seus filhos precisam urgentemente de ajuda. Ele pede uma carroceria para catar recicláveis, acredita que vai ajudar muito na renda.
                <br />
                Seu sonho é uma casa, nem que seja simples, para viverem melhor. @gestosdebondade está com a gente nessa história.
                <br />
                A vaquinha é para a compra de uma moto e carroceria, e construir uma casa digna com móveis e eletrodomésticos.
                <br />
                <span className='font-bold'>
                O nome do doador não aparecerá na lista de doadores, mas o valor doado será contabilizado na campanha normalmente.
                </span>
              </p>
              <div className='p-4 flex w-full justify-center items-center mt-5 border-b'>
                <button className=" bg-[#24CA68] hover:bg-[#15a34a] text-white p-2 px-3 rounded-md text-sm sm:text-base font-bold">
                  Doar agora
                </button>
              </div>
            </div>
          )}
          {activeTab === 'ajuda' && (
             <div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <Card className='w-full flex flex-col justify-between items-start py-3 px-2'>
                   <p className='text-[#15a34a] font-extrabold text-lg'>Contribuições</p>
                   <p className="text-md text-gray-300">360 pessoas doaram</p>
               </Card>
               <Card className='w-full flex flex-col justify-between items-start  py-3 px-2'>
                   <p className='text-[#15a34a] font-extrabold'>Adotantes</p>
                   <p className="text-md text-gray-300">Quer adotar essa vaquinha? Clique aqui</p>
               </Card>
               <Card className='w-full flex flex-col justify-between items-start  py-3 px-2'>
                   <p className='text-[#15a34a] font-extrabold'>Promotores do Bem</p>
                   <p className="text-md text-gray-300">1 pessoa compartilhou e trouxe 1 doação</p>
               </Card>
               <Card className='w-full flex flex-col justify-between items-start  py-3 px-2'>
                 <p className='text-[#15a34a] font-extrabold'>Corações</p>
                 <p className="text-md text-gray-300">Essa vaquinha recebeu 164 corações no total</p>
               </Card>
             </div>
       
               <p className='text-gray-300 mb-5 mt-5 text-xl font-bold'>Promotores do Bem</p>
               <div className='flex flex-col gap-4'>
                 <div className="flex items-center space-x-4">
                   <Avatar className='w-12 h-12'>
                     <AvatarFallback className='bg-[#EF4444] text-white font-bold'>CM</AvatarFallback>
                   </Avatar>
                   <div className=''>
                     <p className="font-bold text-lg">Creilda Moura Moutinho</p>
                     <p className="text-gray-300 text-lg">Divulgou seu link e trouxe 1 doação para essa vaquinha</p>
                   </div>
                 </div>
               </div>
       
               <p className='text-gray-300 mb-5 mt-5 text-xl font-bold'>Últimos contribuintes</p>
               <div className="grid grid-cols-2 gap-4">
                 {[
                   { name: "Anônimo", time: "3 horas atrás" },
                   { name: "Evanylson V.", time: "4 horas atrás" },
                   { name: "MONIQUE C.", time: "4 horas atrás" },
                   { name: "Anônimo", time: "4 horas atrás" },
                   { name: "Lorena", time: "5 horas atrás" },
                   { name: "Anônimo", time: "5 horas atrás" },
                 ].map((contributor, index) => (
                   <Card key={index} className="w-full flex flex-col justify-between items-start px-4 py-4">
                     <span className='font-bold'>{contributor.name}</span>
                     <span className="text-sm text-muted-foreground">{contributor.time}</span>
                   </Card>
                 ))}
               </div>
           </div>
          )}
        </CardContent>
      </Card>
      <div className='p-4 border-b'>
        <p className='text-[20px] font-semibold'>Doadores: 583</p>
        <img src="https://www.ongsalvacao.com/wp-content/uploads/2024/10/3213124.svg" alt="" width={553} height={1024}/>
      </div>
      <div ref={donateSectionRef} className='w-full border-b'>
        <Donate />
      </div>
      <div  className='w-full flex flex-col justify-center items-center gap-2'>
        <p className='font-bold'>UMA VIDA NÃO DEVERIA TER VALOR!</p>
        <img src="https://www.ongsalvacao.com/wp-content/uploads/2024/10/ciaio12.svg" alt="" width={"239px"} />
        <p className='font-semibold text-sm text-gray-500'>Doe amor, doe esperanças…</p>
      </div>
    </div>
  );
}
