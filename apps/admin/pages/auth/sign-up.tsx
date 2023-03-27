import { useState } from 'react';
import InputWithLabel from '../../components/InputWithLabel';
import AuthLayout from '../../layouts/AuthLayout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Link from 'next/link';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

type formValues = {
  email: string;
  storeName: string;
  storeURL: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

function SignUp() {
  const router = useRouter();
  const createAcc = useMutation({
    mutationFn: (values: formValues) => {
      return fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    },
    onSuccess: () => {
      toast.success('Please Sign in', { position: 'bottom-center' });
    },
  });

  const [formInputs, setFormInputs] = useState({
    email: '',
    storeName: '',
    storeURL: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });
  const [signupPage, setSignupPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { refetch } = useQuery({
    queryKey: ['emailAndStoreurl', formInputs.email, formInputs.storeURL],
    queryFn: async () =>
      await fetch(
        `/api/auth/user/check?email=${formInputs.email}&storeURL=${formInputs.storeURL}`
      ).then((res) => res.json()),
    enabled: !!formInputs.email && !!formInputs.storeURL,
  });

  async function handlePrevNext(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    const { data: response } = await refetch();
    if (response?.message === 'email already exists') {
      alert('email already exists. Please try another email.');
    }
    if (response?.message === 'storeURL already exists') {
      alert('storeURL already exists. Please try another URL.');
    }
    if (response?.message === 'OK') {
      setSignupPage(!signupPage);
    }
    setIsLoading(false);
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    // password confirmation here
    createAcc.mutate(formInputs);
    toast.success('Successfully Signed Up', { position: 'bottom-center' });
    router.push('/auth/sign-in');
  }

  return (
    <>
      <Heading title={'Sign-Up'} type={'h2'} />
      <p>
        <Link href="/auth/sign-in" className="font-bold text-indigo-600">
          Already signed up? Click here to sign in.
        </Link>
      </p>
      <br></br>
      {isLoading ? <p>Loading...</p> : null}
      <br></br>
      {!signupPage && (
        <>
          <InputWithLabel
            label="Email"
            id="email"
            type="email"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
          />
          <br></br>
          <InputWithLabel
            label="Store Name"
            id="storeName"
            type="text"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
          />
          <br></br>
          <InputWithLabel
            label="Store URL"
            id="storeURL"
            type="text"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            placeholder="e.g. 'top-toys'"
            required
          />
          <br></br>
          <Button
            size="default"
            appearance="primary"
            type="button"
            onClick={handlePrevNext}
          >
            Next
          </Button>
        </>
      )}
      {signupPage && (
        <>
          <InputWithLabel
            label="First Name"
            id="firstName"
            type="text"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
          />
          <br></br>
          <InputWithLabel
            label="Last Name"
            id="lastName"
            type="text"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
          />
          <br></br>
          <InputWithLabel
            label="Password"
            id="password"
            type="password"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
          />
          <br></br>
          <InputWithLabel
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
          />
          <br></br>
          <Button
            size="default"
            appearance="primary"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <br></br>
          <p
            className="font-bold text-indigo-600 cursor-pointer"
            onClick={handlePrevNext}
          >
            Back
          </p>
        </>
      )}
    </>
  );
}

export default function () {
  return (
    <AuthLayout title="Sign Up">
      <SignUp />
    </AuthLayout>
  );
}
