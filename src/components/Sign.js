import logo from '../Images/Ditools.png'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase'
import { useHistory } from 'react-router-dom'






export default function Sign() {
  
  
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);
    const history = useHistory();

    const ingreso = (e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, inputEmail.current.value, inputPassword.current.value).then((userCredential) =>{
          // alert('You Signed in')
          if (auth){
            history.push('/');
          }
      }).catch((error) =>{
          alert(error.message)
      })
  }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to='/'>
            <img
              className="mx-auto w-60"
              src={logo}
              alt="Workflow"
            />
            </Link>
           
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inicia Sesión</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Ó{' '}
              <Link to='/register'>
                <p className='font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer'>
                Registrate!
                </p>
              </Link>
              
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  ref={inputEmail}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  ref={inputPassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Recuerdame
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Olvidaste tu Contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={ingreso}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
