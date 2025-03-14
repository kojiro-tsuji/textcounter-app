import Layout from '../components/Layout';
import PasswordGenerator from '../components/password-gene';

export default function password() {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                <div className='flex justify-center'>
                    <div className='w-full max-w-4xl px-4'>
                        <div className="py-16">
                         <PasswordGenerator/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}