import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import QRCode from 'qrcode';
import { getRandomName, getRandomEmail, getRandomPhone, generateValidCPF, getRandomIP, getRandomProductTitle } from '@/app/functions-random';

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    if (!amount) {
      return NextResponse.json({ error: 'Valor não fornecido' }, { status: 400 });
    }

    const authorizationToken = Buffer.from(
      'sk_LghNMDp-M8tuMNLB86M6mnVTtsaM7Ct8XXfM7qZsRgZlASYf:pk_i66ldVS8waHyTQDgNA98w0_3BO5X7FxNruEGrhjmEuCZCKwr'
    ).toString('base64');

    // Gerando dados aleatórios
    const { firstName, lastName } = getRandomName();
    const randomEmail = getRandomEmail(firstName, lastName);
    const randomPhone = getRandomPhone();
    const randomCPF = generateValidCPF();
    const randomIP = getRandomIP();
    const randomProductTitle = getRandomProductTitle();

    const transactionData = {
      ip: randomIP,
      pix: {
        expiresInDays: 1,
      },
      items: [
        {
          title: randomProductTitle, // Usando título de produto aleatório
          quantity: 1,
          tangible: false,
          unitPrice: 600,
        },
      ],
      amount: amount  * 100,
      customer: {
        name: `${firstName} ${lastName}`,
        email: randomEmail,
        phone: randomPhone,
        document: {
          type: "cpf",
          number: randomCPF,
        },
      },
      metadata: `{\"provider\":\"Vega Checkout\",\"user_identitication_number\":\"${randomCPF}\",\"user_email\":\"${randomEmail}\",\"sell_url\":\"https:\\/\\/hydradev.online\",\"order_url\":\"https:\\/\\/pay.hydradev.online\\/order\\/34qKx8lZ\"}`,
      traceable: false,
      externalRef: "34qKx8lZ",
      postbackUrl: "https://pay.vegacheckout.com.br/api/postback/hydrapay",
      paymentMethod: "pix",
    };

    console.log('Enviando dados para a API WeGatePay:', transactionData);

    const pixResponse = await axios.post(
      'https://api.wegatepay.com.br/api/v1/transactions',
      transactionData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Basic ${authorizationToken}`,
        },
      }
    );

    const resultData = pixResponse.data;

    if (!resultData?.data?.pix?.qrcode) {
      throw new Error("QR Code não encontrado na resposta da API");
    }

    console.log("Resposta da API PIX:", resultData);

    const qrCode = await QRCode.toDataURL(resultData.data.pix.qrcode);
    const pixCode = resultData.data.pix.qrcode;

    return NextResponse.json({ qrCode, pixCode });
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    return NextResponse.json({ error: 'Erro ao processar a requisição' }, { status: 500 });
  }
}
