export interface MintSuccessProps {
  wishId: string;
  wishTitle: string;
  wishCategory: string;
  shareUrl: string;
  shareText: string;
}

export interface WishPreviewProps {
  wishId: string;
  wishTitle: string;
  wishCategory: string;
}

export interface ShareButtonsProps {
  shareUrl: string;
  shareText: string;
}

export interface ActionButtonsProps {
  wishId: string;
} 