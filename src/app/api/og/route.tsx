import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Dynamic parameters
        const title = searchParams.has('title')
            ? searchParams.get('title')?.slice(0, 100)
            : 'Buy Top Insurance & Expert Claim Support';
        
        const category = searchParams.has('category')
            ? searchParams.get('category')
            : 'Insurance Support';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        backgroundColor: '#1e3a8a',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #ffffff20 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ffffff20 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        padding: '80px',
                        fontFamily: 'sans-serif',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '40px',
                        }}
                    >
                        <div
                            style={{
                                color: '#60a5fa', // blue-400
                                fontSize: 32,
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                        >
                            {category}
                        </div>
                    </div>
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            color: 'white',
                            lineHeight: 1.1,
                            marginBottom: '40px',
                            wordBreak: 'break-word',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 'auto',
                        }}
                    >
                        <div
                            style={{
                                color: '#93c5fd', // blue-300
                                fontSize: 28,
                                fontWeight: 600,
                            }}
                        >
                            insurancesupport.online
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
