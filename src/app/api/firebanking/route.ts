import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import QRCode from 'qrcode';
import { generateValidCPF, getRandomName } from '@/app/functions-random';
import { randomUUID } from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    if (!amount) {
      return NextResponse.json({ error: 'Valor não fornecido' }, { status: 400 });
    }

    const token = "b7c61f3a-8b97-406f-ab41-a0912aced649";

    if (!token) {
      return NextResponse.json({ error: 'Falha ao obter o token do provedor de pagamentos' }, { status: 500 });
    }

    const { firstName, lastName } = getRandomName();
    const validCPF = generateValidCPF();

    const firebankingData = {
      type: "PIX",
      payer: {
        fullName: `${firstName} ${lastName}`,
        document: validCPF,
      },
      transaction: {
        value: amount,
        description: 'Venda',
        dueDate: new Date().toISOString().split("T")[0]!,
        externalId: randomUUID().toString(),
      },
    };

    console.log('Enviando dados para a API externa:', firebankingData);

    const pixResponse = await axios.post(
      'https://api.firebanking.io/payment',
      firebankingData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          apiKey: token,
        },
      }
    );

    const resultData = pixResponse.data as {
      id: string;
      transactionId: string;
      status: string;
      pixQrCode: string;
      pixCode: string;
    };

    if (!resultData?.transactionId) {
      throw new Error("ID não encontrado na resposta da API");
    }

    console.log("Resposta da API PIX:", resultData);

    const qrCode = await QRCode.toDataURL(resultData.pixCode);
    const pixCode = resultData.pixCode;

    return NextResponse.json({ qrCode, pixCode });
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    return NextResponse.json({ error: 'Erro ao processar a requisição' }, { status: 500 });
  }
}
