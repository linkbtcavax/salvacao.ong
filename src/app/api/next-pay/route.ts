import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import QRCode from 'qrcode';
import { generateValidCPF, getRandomEmail, getRandomName, getRandomPhone } from '@/app/functions-random';

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    if (!amount) {
      return NextResponse.json({ error: 'Valor não fornecido' }, { status: 400 });
    }

    const clientId = "ik2lu330l1ur5vpokataj82c0";
    const clientSecret = "jrt875frrc61o5m7pq7m76lapd1n2vs1i6rqber2j02gc1mp67a";

    const tokenResponse = await axios.post(
      'https://oauth2.nextpayments.com.br/oauth2/token',
      {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      },
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    const tokenData = tokenResponse.data;

    if (!tokenData || !tokenData.access_token) {
      return NextResponse.json({ error: 'Falha ao obter o token do provedor de pagamentos' }, { status: 500 });
    }

    const paymentToken = `${tokenData.token_type} ${tokenData.access_token}`;

    const { firstName, lastName } = getRandomName();
    const randomEmail = getRandomEmail(firstName, lastName);
    const randomPhone = getRandomPhone();
    const validCPF = generateValidCPF();

    const nextData = {
      amount: amount,
      fixedAmount: true,
      description: 'Venda',
      customer: {
        name: `${firstName} ${lastName}`,
        email: randomEmail,
        mobilePhone: randomPhone,
        document: validCPF,
      },
      ttl: 86400,
    };

    console.log('Enviando dados para a API externa:', nextData);

    const pixResponse = await axios.post(
      'https://api.nextpayments.com.br/pix/generate',
      nextData,
      {
        headers: {
          Authorization: paymentToken,
        },
      }
    );

    const pixData = pixResponse.data;
    console.log("Resposta da API PIX:", pixData);

    const qrCode = await QRCode.toDataURL(pixData.pixCopyPaste);

    console.log("Dados que serão salvos no banco:");

    return NextResponse.json({ qrCode, pixCode: pixData.pixCopyPaste });
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    return NextResponse.json({ error: 'Erro ao processar a requisição' }, { status: 500 });
  }
}

