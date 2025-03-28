import Layout from '../components/Layout';
import SnapPDF from '../components/SnapPDF';

export default function snapPDF() {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                <div className='flex justify-center'>
                    <div className='w-full max-w-4xl px-4'>
                        <div className="py-16">
                         <SnapPDF/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}