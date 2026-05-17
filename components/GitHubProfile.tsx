"use client";

import { useEffect, useState } from "react";

type GitHubUser = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
};

export function GitHubProfile() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubUser() {
      try {
        const response = await fetch(
          "https://api.github.com/users/ILLiDiuM1"
        );

        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubUser();
  }, []);

  if (loading) {
    return (
      <section className="border-t py-16">
        <p>Loading GitHub profile...</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="border-t py-16">
        <p>Failed to load profile.</p>
      </section>
    );
  }

  return (
    <section className="border-t py-16">
      <h2 className="mb-6 text-3xl font-bold">GitHub Profile</h2>

      <div className="flex flex-col gap-6 rounded-2xl border p-6 md:flex-row md:items-center">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="h-24 w-24 rounded-full"
        />

        <div>
          <h3 className="text-2xl font-semibold">{user.name}</h3>

          <p className="text-sm text-gray-500">@{user.login}</p>

          <p className="mt-3 text-gray-600">{user.bio}</p>

          <p className="mt-4 text-sm">
            Public repositories: {user.public_repos}
          </p>
        </div>
      </div>
    </section>
  );
}