/* eslint-disable @next/next/no-img-element */
//build
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from '../ui/card';
import Modal from 'react-modal';
import axios from 'axios';
import { Input } from '../ui/input';
//commit
export default function Donate() {
  const [customAmount, setCustomAmount] = useState('');
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [pixCode, setPixCode] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [customModalIsOpen, setCustomModalIsOpen] = useState(false);
  const [loading, setLoading] = useState<{ [key: number]: boolean }>({});
  const goal = 40000;
  const raised = 29361;
  const remaining = goal - raised;

  const donationAmounts = [30, 40, 150, 300];

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function openCustomModal() {
    setCustomModalIsOpen(true);
  }

  function closeCustomModal() {
    setCustomModalIsOpen(false);
  }

  // Função para atualizar o estado de loading individualmente
  function setLoadingForAmount(amount: number, isLoading: boolean) {
    setLoading((prev) => ({ ...prev, [amount]: isLoading }));
  }

  async function handleButtonClick(value: number) {
    try {
      setLoadingForAmount(value, true);
      const response = await axios.post('/api/generate', { amount: value });

      if (response.data.qrCode) {
        setQrCode(response.data.qrCode);
      }
      if (response.data.pixCode) {
        setPixCode(response.data.pixCode);
        openModal();
      }
    } catch (error) {
      console.error('Erro ao gerar o PIX:', error);
    } finally {
      setLoadingForAmount(value, false);
    }
  }

  async function handleConfirmCustomDonation() {
    const amount = parseFloat(customAmount);

    setLoadingForAmount(amount, true);

    await handleButtonClick(amount);

    if (!loading[amount]) {
      closeCustomModal();
    }
  }

  function copyPixCode() {
    if (pixCode) {
      navigator.clipboard.writeText(pixCode);
      alert('Código Pix copiado!');
    }
  }

  return (
    <Card className="flex flex-col gap-4 p-4 w-full">
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row text-lg text-center sm:text-left">
          {/* <span className="font-bold text-red-600">ARRECADADO: <span className='text-black'>R$ {raised.toLocaleString('pt-BR')}</span>{" "}-{" "}</span> */}
          <span className="font-bold text-red-600">{" "}META: <span className='text-black'>R$ {goal.toLocaleString('pt-BR')}</span></span>
        </div>
        <Progress value={(raised / goal) * 100} className="h-4 sm:h-7"/>
        <div className="text-center text-sm font-semibold">
          <Button className='bg-[#15a34a] hover:bg-[#15a34a] text-lg font-bold'>
            FALTA {remaining.toLocaleString('pt-BR')}
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">QUAL VALOR VOCÊ DESEJA DOAR?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {donationAmounts.map((amount) => (
            <Button 
            key={amount} 
            onClick={() => handleButtonClick(amount)} 
            variant="outline" 
            className="bg-[#22C55E] hover:bg-[#15a34a] hover:text-white text-white h-12 font-extrabold text-lg transform transition-transform duration-300 hover:scale-105"
            disabled={loading[amount]} // Ativar o loading para cada valor individualmente
          >
            {loading[amount] ? 'Carregando...' : `R$ ${amount}`}
          </Button>
          
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-lg text-center font-semibold">SUA AÇÃO PODE SALVAR UMA VIDA! SEJA A DIFERENÇA</p>
        <div className="flex space-x-2 items-center justify-center">
          <Button onClick={openCustomModal} className="bg-[#15a34a] hover:bg-[#15a34a] hover:text-white text-white h-10 font-extrabold text-lg">
            Fazer uma doação personalizada
          </Button>
        </div>
      </div>

      {/* Modal para exibir o QR code */}
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        contentLabel="QR Code Modal"
        className="fixed inset-0 flex items-center justify-center p-4 bg-opacity-75 bg-gray-700"
      >
        <div className="relative bg-white p-6 rounded-lg shadow-lg">
          <button onClick={closeModal} className="absolute top-2 right-2 bg-transparent hover:bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-gray-600 hover:text-gray-700 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className='flex flex-col w-full items-center justify-center gap-2'>
            <h1 className='text-xl font-bold'>Pagamento</h1>
            <p className='text-md font-medium'>Escaneie o QR code abaixo ou copie o código PIX para realizar o pagamento.</p>
            {qrCode ? (
              <img src={qrCode} alt="QR Code" className="w-full h-auto max-w-[200px] max-h-[200px] mx-auto" />
            ) : (
              <p>Gerando QR Code...</p>
            )}
            <Input  type="text" value={pixCode ? pixCode : ''} disabled={true} className='text-black font-extrabold '/>
            <p className='text-[12px] font-bold'>ATENÇÃO: Você está perto de mudar o final de uma história!.</p>
            <Button className="mt-4 bg-[#22C55E] hover:bg-[#15a34a] h-12 font-bold text-md" onClick={copyPixCode}>
              Copiar código Pix
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal para doação personalizada */}
      <Modal 
        isOpen={customModalIsOpen} 
        onRequestClose={closeCustomModal} 
        contentLabel="Doação Personalizada"
        className="fixed inset-0 flex items-center justify-center p-4 bg-opacity-75 bg-gray-700"
      >
        <div className="relative bg-white p-6 rounded-lg shadow-lg lg:w-[550px] py-10 sm:w-full">
          <h2 className="text-lg font-bold mb-4">Digite o valor da sua doação</h2>
          <input 
            type="number" 
            value={customAmount} 
            onChange={(e) => setCustomAmount(e.target.value)} 
            className="border border-gray-300 p-2 rounded w-full mb-6 outline-none"
            placeholder="Ex: 50"
          />
          <div className="flex justify-end gap-4">
            <Button onClick={closeCustomModal} className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded">
              Cancelar
            </Button>
            <Button onClick={handleConfirmCustomDonation} className="bg-[#15a34a] text-white hover:bg-[#0f9a3e] px-4 py-2 rounded">
              {loading[parseFloat(customAmount)] ? 'Carregando...' : 'Confirmar'}
            </Button>
          </div>
        </div>
      </Modal>
    </Card>
  )
}
