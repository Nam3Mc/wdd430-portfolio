'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const baseClasses =
    'flex h-10 min-w-10 items-center justify-center rounded-lg border border-white/10 px-3 text-sm font-medium transition-colors';

  return (
    <div className="flex justify-center gap-2 pt-8">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className={`${baseClasses} bg-white/5 text-gray-200 hover:bg-white/10`}
        >
          Prev
        </Link>
      ) : (
        <span className={`${baseClasses} bg-white/5 text-gray-600 cursor-not-allowed`}>
          Prev
        </span>
      )}

      {/* Page numbers */}
      {allPages.map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={
            page === currentPage
              ? `${baseClasses} bg-cyan-500 text-slate-950 border-cyan-500`
              : `${baseClasses} bg-white/5 text-gray-200 hover:bg-white/10`
          }
        >
          {page}
        </Link>
      ))}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className={`${baseClasses} bg-white/5 text-gray-200 hover:bg-white/10`}
        >
          Next
        </Link>
      ) : (
        <span className={`${baseClasses} bg-white/5 text-gray-600 cursor-not-allowed`}>
          Next
        </span>
      )}
    </div>
  );
}