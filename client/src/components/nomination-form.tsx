import React, { useState, ChangeEvent } from "react";

// UI components (same as before)
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

interface SelectProps {
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow-lg ${className}`}>{children}</div>
);

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Textarea: React.FC<TextareaProps> = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical ${className}`}
    {...props}
  />
);

const Label: React.FC<LabelProps> = ({ children, className = "", ...props }) => (
  <label className={`block ${className}`} {...props}>
    {children}
  </label>
);

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded font-medium transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Select: React.FC<SelectProps> = ({ children, value, onValueChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="w-full px-3 py-2 rounded border bg-black border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select a category</option>
      {React.Children.map(children, (child) => child)}
    </select>
  );
};

const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => (
  <option value={value}>{children}</option>
);

const Send = () => <span>📤</span>;

// New interface for form data
export interface NominationFormData {
  name: string;
  organization: string;
  designation: string;
  email: string;
  contactNo: string;
  linkedin: string;
  category: string;
  photo?: File | null;
  writeUp: string;
}

interface NominationFormProps {
  formData: NominationFormData;
  categories: { label: string; value: string }[];
  handleInputChange: (field: keyof NominationFormData, value: string | File | null) => void;
  handleSubmit: () => void;
  isVisible: boolean;
  onClose: () => void;
  formErrors: Partial<Record<keyof NominationFormData, string>>;
}

export const NominationForm: React.FC<NominationFormProps> = ({
  formData,
  categories,
  handleInputChange,
  handleSubmit,
  isVisible,
  onClose,
  formErrors,
}) => {
  if (!isVisible) return null;

  // Special handler for file input to extract File object
  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    handleInputChange("photo", file);
  };

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black bg-opacity-70 flex justify-center items-start pt-20"
      style={{ zIndex: "9999" }}
    >
      <div className="max-w-4xl w-full mx-auto px-4">
        {/* Close button */}
        <div className="text-right mb-4">
          <button
            onClick={onClose}
            className="text-white font-bold px-4 py-2 hover:text-yellow-400 transition-colors bg-gray-800 rounded"
            type="button"
          >
            Close ✕
          </button>
        </div>

        <Card className="bg-gray-900 border border-gray-800">
          <CardContent className="p-8">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-white mb-4 font-serif">
                Nomination Form
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className={`mt-2 bg-black text-white ${
                        formErrors.name ? "border-red-500" : "border-gray-700"
                      }`}
                      autoComplete="off"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="organization"
                      className="text-sm font-medium text-gray-300 mb-2"
                    >
                      Organization *
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      placeholder="Your organization name"
                      className={`mt-2 bg-black text-white ${
                        formErrors.organization ? "border-red-500" : "border-gray-700"
                      }`}
                      autoComplete="off"
                    />
                    {formErrors.organization && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.organization}</p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="designation"
                      className="text-sm font-medium text-gray-300 mb-2"
                    >
                      Designation *
                    </Label>
                    <Input
                      id="designation"
                      name="designation"
                      type="text"
                      value={formData.designation}
                      onChange={(e) => handleInputChange("designation", e.target.value)}
                      placeholder="Your designation"
                      className={`mt-2 bg-black text-white ${
                        formErrors.designation ? "border-red-500" : "border-gray-700"
                      }`}
                      autoComplete="off"
                    />
                    {formErrors.designation && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.designation}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className={`mt-2 bg-black text-white ${
                        formErrors.email ? "border-red-500" : "border-gray-700"
                      }`}
                      autoComplete="off"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="contactNo"
                      className="text-sm font-medium text-gray-300 mb-2"
                    >
                      Contact No *
                    </Label>
                    <Input
                      id="contactNo"
                      name="contactNo"
                      type="text"
                      value={formData.contactNo}
                      onChange={(e) => handleInputChange("contactNo", e.target.value)}
                      placeholder="Phone number"
                      className={`mt-2 bg-black text-white ${
                        formErrors.contactNo ? "border-red-500" : "border-gray-700"
                      }`}
                      autoComplete="off"
                    />
                    {formErrors.contactNo && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.contactNo}</p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="linkedin"
                      className="text-sm font-medium text-gray-300 mb-2"
                    >
                      LinkedIn Profile
                    </Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      placeholder="LinkedIn URL"
                      className="mt-2 bg-black border-gray-700 text-white"
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-2">
                      Categories *
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => handleInputChange("category", value)}
                    >
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </Select>
                    {formErrors.category && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="photo"
                      className="text-sm font-medium text-gray-300 mb-2"
                    >
                      Upload Photo *
                    </Label>
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/*"
                      onChange={onFileChange}
                      className={`mt-2 text-white ${
                        formErrors.photo ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.photo && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.photo}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="writeUp" className="text-sm font-medium text-gray-300 mb-2">
                  Write-up *
                </Label>
                <Textarea
                  id="writeUp"
                  name="writeUp"
                  value={formData.writeUp}
                  onChange={(e) => handleInputChange("writeUp", e.target.value)}
                  rows={6}
                  placeholder="Write about the nominee..."
                  className={`mt-2 bg-black text-white ${
                    formErrors.writeUp ? "border-red-500" : "border-gray-700"
                  }`}
                />
                {formErrors.writeUp && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.writeUp}</p>
                )}
              </div>

              <div className="text-center pt-6">
                <Button
                  onClick={onSubmit}
                  className="bg-yellow-500 text-black px-12 py-4 h-auto text-lg font-semibold hover:bg-yellow-600 transition-all"
                >
                  <Send /> Submit Nomination
                </Button>
                <p className="text-gray-400 text-sm mt-4">
                  All nominations are reviewed by our team. We may contact you for additional information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};