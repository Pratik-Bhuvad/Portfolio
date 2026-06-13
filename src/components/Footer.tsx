import { footerInfo } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="border-t border-(--border-subtle) bg-background">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          {/* Left - Status and Location */}
          <div className="text-center sm:text-left">
            <p className="font-mono text-xs sm:text-sm text-(--text-secondary)">
              <span className="text-foreground font-medium">
                [ {footerInfo.status} — {footerInfo.role} · {footerInfo.location} ]
              </span>
            </p>
          </div>

          {/* Right - Copyright */}
          <div className="text-center sm:text-right">
            <p className="font-mono text-xs sm:text-sm text-(--text-muted)">
              © {footerInfo.copyrightYear} {footerInfo.copyrightName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
