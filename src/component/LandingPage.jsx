import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-screen  bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-400">
          Enkapsulasi Pemrograman Lanjut
        </h1>

        {/* Video Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1">
            <iframe
              src="https://www.youtube.com/embed/sWSWp52PR_0"
              className="w-full aspect-video rounded-2xl shadow-2xl transition-transform hover:scale-[1.02]"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Form Absensi */}
          <div className="w-full md:w-1/3 bg-slate-700/30 p-8 rounded-2xl backdrop-blur-sm border border-slate-600 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-300">
              📝 Absensi Mahasiswa
            </h2>
            <p className="text-sm text-slate-300 mb-6 text-center">
              Silahkan isi form berikut untuk melakukan absensi peserta.
            </p>

            <form 
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-4 w-full"
            >
              <input
                type="hidden"
                name="access_key"
                value="53e9333c-266c-4f4c-8613-93a45f63a91e"
              />

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Masukkan nama kamu"
                    className="w-full px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Alamat Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@contoh.com"
                    className="w-full px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">NIM</label>
                  <input
                    type="text"
                    name="nim"
                    placeholder="Nomor Induk Mahasiswa"
                    className="w-full px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-indigo-500/30"
              >
                Kirim Absensi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;