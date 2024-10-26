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
        <h1 className='text-2xl sm:text-4xl font-bold text-[#434242]'>Menina com distrofia muscular vive 24h em cama e tem dias que precisa escolher entre comer ou comprar remédio</h1>
      </div>
      <div className='flex flex-col lg:flex-row  items-start gap-8 mt-5 w-full'>
        <Card className="flex flex-col sm:px-2 sm:py-2 w-full border-b">
            <CardContent className='flex flex-row gap-1 py-2 w-full'>
              <div className="relative w-full lg:h-auto sm:relative sm:w-full">
                <img
                  src="https://www.ongsalvacao.com/wp-content/uploads/2024/10/3213124414-768x432.png"
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
                  Estamos apaixonados pela Mari. Mesmo vivendo 24h numa cama, devido a distrofia muscular congênita, ela não deixa de sorrir e de agradecer pela vida.
                </span><br />

                Vaidosa, está sempre arrumada, com cabelos e unhas feitas!<br /> 

                Mari tem 14 anos e vive com a mãe e o irmão em São Sebastião de Lagoa da Roça, na Paraíba. Há 3 anos perdeu o pai, que era o alicerce da casa.<br /> 

                <span className='font-bold'>
                Preocupada, ela conta que fica triste quando a mãe precisa escolher entre comprar comida ou seus remédios… passam muitas necessidades mesmo. Tem dias que falta o básico em casa.
                </span>
              </p>
              <div className="relative w-full">
                <img src="https://www.ongsalvacao.com/wp-content/uploads/2024/10/dd1ff602-7650-4026-aee0-a84cc212560b-768x435.png" alt="" className="w-full lg:h-[400px] object-contain object-center" />
              </div>
              <p className='leading-[35px] text-[16px]'>
                Devido a isso, Mari está está com com desnutrição severa, pois sua alimentação deveria ser bem especial com proteínas e vitaminas.
                <br />
                Ela também está com escoliose e passa boa parte de seu tempo em cima da cama. Não tem movimentos nos braços e nem nas pernas e precisa de ajuda para tudo. Usa fraldas 24h.
                <br />
                <span className='font-bold'>
                Mari nos contou que quer muito voltar pra escola, mas sem a cadeira, fica impossível. Era seu pai que a levava, mas agora, não tem condições mesmo de ir.
                </span>
                A vaquinha é para conseguir nesse primeiro momento todo o tratamento pra ela, como fisio, fono, pneumologista, exames genéticos (porque ela pode ter outras síndromes), psicólogo, psiquiatra e neurologistas. E, a cadeira de rodas adaptada.
                <br />
                Ela tem uma bem velhinha, mas devido a escoliose, ela fica até com falta de ar, pois a postura acaba comprimindo o pulmão.
                <br />
                Ela também precisa de um bipap para conseguir dormir melhor à noite. Quando ela dorme, a saturação cai muito e sua mãe tem medo dela morrer.
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
